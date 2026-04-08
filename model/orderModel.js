import { itemDB, ordersList, ordersDetailsList } from "../db/data.js";

export class OrderModel {

    getAllOrders() {
        if (ordersList.length === 0) {
            return { isEmpty: true, orders: [] };
        } else {
            return { isEmpty: false, orders: ordersList };
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

        ordersDetailsList.push(...details);
        ordersList.push(newOrder);

        alert("Order placed successfully!");
    }

    formatOrderId(id) {
        return `ORD-${String(id).padStart(3, "0")}`;
    }

    generateNewOrderId() {
        const maxId = ordersList.reduce((max, order) => {
            const numPart = parseInt(order.id.split("-")[1], 10);
            return Math.max(max, numPart);
        }, 0);
        return this.formatOrderId(maxId + 1);
    }
}
