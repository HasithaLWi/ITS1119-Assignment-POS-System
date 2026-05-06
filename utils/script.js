import { saveCustomer, updateCustomer, resetCustomerpage } from "../controller/customerController.js";
import { saveItem, updateItem, resetItemPage } from "../controller/itemController.js";
import { addItemToCart, placeOrder, resetOrderForm } from "../controller/orderController.js";
import { resetOrderHistory } from "../controller/orderHistoryController.js";
import { saveUser, closeUserManager } from "../controller/userController.js";

window.saveCustomer = saveCustomer;
window.updateCustomer = updateCustomer;
window.resetCustomerpage = resetCustomerpage;
window.saveItem = saveItem;
window.updateItem = updateItem;
window.resetItemPage = resetItemPage;
window.addItemToCart = addItemToCart;
window.resetOrderForm = resetOrderForm;
window.placeOrder = placeOrder;
window.resetOrderHistory = resetOrderHistory;
window.saveUser = saveUser;
window.closeUserManager = closeUserManager;


document.addEventListener("DOMContentLoaded", () => {

	const userBtn = document.getElementById("user-btn");
	const userManagerOverlay = document.getElementById("user-manager-overlay");
	const sideMenubar = document.querySelector(".side-menubar-container");
	const sideProfileBtn = document.getElementById("side-profile");

	if (userBtn && sideMenubar) {
		userBtn.addEventListener("click", (e) => {
			e.stopPropagation();
			sideMenubar.classList.toggle("hidden");
		});
	}

	if (sideProfileBtn && userManagerOverlay) {
		sideProfileBtn.addEventListener("click", () => {
			sideMenubar.classList.add("hidden");
			userManagerOverlay.style.display = "flex";
		});
	}

	document.addEventListener("click", (e) => {
		if (sideMenubar && !sideMenubar.contains(e.target) && e.target !== userBtn) {
			sideMenubar.classList.add("hidden");
		}
	});

	window.closeUserManager = function () {
		if (userManagerOverlay) {
			userManagerOverlay.style.display = "none";
		}
	};


});


// --- Navigation Logic ---
export const navLinks = document.querySelectorAll('.nav-link');
export const pages = document.querySelectorAll('.content-section');

navLinks.forEach(link => {
	link.addEventListener('click', (e) => {
		e.preventDefault();
		const target = link.getAttribute('data-target');

		navLinks.forEach(l => l.classList.remove('active'));
		link.classList.add('active');

		pages.forEach(p => {
			p.classList.remove('active');
			p.classList.add('hidden');
			if (p.id === target) {
				p.classList.add('active');
				p.classList.remove('hidden');
			}
		});
	});
});




