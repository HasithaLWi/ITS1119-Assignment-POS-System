import { itemDB, orderDB, ordersDetailsDB } from "../db/data.js";

export class OrderModel {

    getAllOrders() {
        if (orderDB.length === 0) {
            return { isEmpty: true, orders: [] };
        } else {
            return { isEmpty: false, orders: [...orderDB] };
        }
    }


    placeOrder(newOrder) {

        const details = newOrder.orderDetails;


        details.map(detail => {
            const item = itemDB.find(i => i.id === detail.itemId);
            if (item) {
                item.qty -= detail.qty;
            }
        });

        ordersDetailsDB.push(...details);
        orderDB.push(newOrder);

        return { title: "Success", message: "Order placed successfully.", type: "success" };
    }

    formatOrderId(id) {
        return `ORD-${String(id).padStart(3, "0")}`;
    }

    generateNewOrderId() {
        const maxId = orderDB.reduce((max, order) => {
            const numPart = parseInt(order.id.split("-")[1], 10);
            return Math.max(max, numPart);
        }, 0);
        return this.formatOrderId(maxId + 1);
    }

    updateOrder(updatedOrder) {

        if (!updatedOrder || !updatedOrder.id) {
            return { title: "Error", message: "Invalid order data. Update failed.", type: "error" };
        }
        const orderId = updatedOrder.id;
        const existingOrderIndex = orderDB.findIndex(order => order.id === orderId);

        if (existingOrderIndex === -1) {
            return { title: "Error", message: "Order not found. Update failed.", type: "error" };
        }


        const existingOrder = orderDB[existingOrderIndex];
        const previousDetails = Array.isArray(existingOrder.orderDetails) ? existingOrder.orderDetails : [];



        // Restore previous stock before checking and applying the updated cart quantities.
        previousDetails.forEach(detail => {
            const item = itemDB.find(i => i.id === detail.itemId);
            if (item) {
                item.qty += detail.qty;
            }
        });


        orderDB[existingOrderIndex] = updatedOrder;

        const updatedDetails = updatedOrder.orderDetails;

        updatedDetails.forEach(detail => {
            const item = itemDB.find(i => i.id === detail.itemId);
            if (item) {
                item.qty -= detail.qty;
            }
        });


        for (let i = ordersDetailsDB.length - 1; i >= 0; i -= 1) {
            if (ordersDetailsDB[i].orderId === orderId) {
                ordersDetailsDB.splice(i, 1);
            }
        }
        ordersDetailsDB.push(...updatedDetails);

        return { title: "Success", message: "Order updated successfully.", type: "success" };
    }
}