import { Customer } from "../dto/customer.js";
import { Item } from "../dto/item.js";
import { User } from "../dto/user.js";
import { Order } from "../dto/order.js";
import { OrderDetails } from "../dto/orderDetails.js";



export const customerDB = [
	new Customer("CUS-001", "Customer one", "0709876543", "Galle"),
	new Customer("CUS-002", "Customer two", "0712345678", "Colombo"),
	new Customer("CUS-003", "Customer three", "0779876543", "Kandy"),
	new Customer("CUS-004", "Customer four", "0701234567", "Jaffna"),
	new Customer("CUS-005", "Customer five", "0765432198", "Matara")
];

export const itemDB = [
	new Item("ITM-001", "Item one", 5000, 10),
	new Item("ITM-002", "Item two", 7000, 5),
	new Item("ITM-003", "Item three", 2000, 8),
	new Item("ITM-004", "Item four", 8500, 3),
	new Item("ITM-005", "Item five", 3000, 15)
];

export const usersDB = [
	new User("UID-001", "admin", "admin123", "Admin", "Admin User", "Galle", "0709876543", "admin@example.com"),
	new User("UID-002", "user1", "password1", "Cashier", "User One", "Colombo", "0712345678", "user1@example.com"),
	new User("UID-003", "user2", "password2", "Cashier", "User Two", "Kandy", "0779876543", "user2@example.com")
];
//ordersDetailsList
export const ordersDetailsDB = [
	new OrderDetails("ORD-001", "ITM-001", 2),
	new OrderDetails("ORD-002", "ITM-002", 1),
	new OrderDetails("ORD-002", "ITM-003", 3),
	new OrderDetails("ORD-003", "ITM-004", 4),
	new OrderDetails("ORD-004", "ITM-005", 2),
	new OrderDetails("ORD-004", "ITM-001", 1),
	new OrderDetails("ORD-005", "ITM-003", 5)
];

//ordersList
export const orderDB = [
	new Order("ORD-001", "CUS-001", "2024-06-01", 10000, 12, 8800, [{ orderId: "ORD-001", itemId: "ITM-001", qty: 2 }]),
	new Order("ORD-002", "CUS-002", "2024-06-02", 13000, 5, 12350, [{ orderId: "ORD-002", itemId: "ITM-002", qty: 1 }, { orderId: "ORD-002", itemId: "ITM-003", qty: 3 }]),
	new Order("ORD-003", "CUS-003", "2024-06-03", 34000, 0, 34000, [{ orderId: "ORD-003", itemId: "ITM-004", qty: 4 }]),
	new Order("ORD-004", "CUS-004", "2024-06-04", 11000, 8, 10120, [{ orderId: "ORD-004", itemId: "ITM-005", qty: 2 }, { orderId: "ORD-004", itemId: "ITM-001", qty: 1 }]),
	new Order("ORD-005", "CUS-005", "2024-06-05", 10000, 10, 9000, [{ orderId: "ORD-005", itemId: "ITM-003", qty: 5 }])
];