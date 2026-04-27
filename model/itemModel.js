import { itemDB, ordersDetailsDB } from "../db/data.js";
import { showAlert } from "../utils/showAlert.js";

export class ItemModel {


    getAllItems() {
        if (itemDB.length === 0) {
            return { isEmpty: true, items: [] };
        } else {
            return { isEmpty: false, items: [...itemDB] };
        }
    }

    saveItem(item) {
        let isDuplicate = false;
        itemDB.forEach(existingItem => {
            if (existingItem.name === item.name) {
                showAlert("Error", "Item with this name already exists.", "error");
                isDuplicate = true;
                return;
            }
        });
        if (isDuplicate) {
            return;
        }
        itemDB.push(item);

        showAlert("Success", "Item added successfully.", "success");
    }

    updateItem(updatedItem) {
        const index = itemDB.findIndex(item => item.id === updatedItem.id);
        if (index >= 0 && index < itemDB.length) {
            itemDB[index] = { ...itemDB[index], ...updatedItem };
            showAlert("Success", "Item updated successfully.", "success");
        } else {
            showAlert("Error", "Item not found.", "error");
        }
    }

    deleteItem(id) {
        const index = itemDB.findIndex(item => item.id === id);
        const orderDetails = ordersDetailsDB.find(od => od.itemId === id);
        if (index >= 0 && index < itemDB.length) {
            if (orderDetails) {
                showAlert("Error", "Cannot delete item. It is associated with an existing order.", "error");
                return;
            }
            itemDB.splice(index, 1);
            showAlert("Success", "Item deleted successfully.", "success");
        } else {
            showAlert("Error", "Item not found.", "error");
        }
    }

    generateNewItemCode() {
        const maxId = itemDB.reduce((max, item) => {
            const numPart = parseInt(item.id.split("-")[1], 10);
            return Math.max(max, numPart);
        }, 0);
        return this.formatItemCode(maxId + 1);
    }

    formatItemCode(id) {
        return `ITM-${String(id).padStart(3, "0")}`;
    }
}