import { UserModel } from "../model/userModel.js";

window.addEventListener("message", (event) => {
    if (event.data && event.data.type === "SET_ACCENT") {
        document.body.style.setProperty("--accent-color", event.data.color);
    }
});


const userModelInstance = new UserModel();
let userDataList = [];

function loadAllUsers() {
    userDataList = userModelInstance.getAllUsers().users;
    console.log(userDataList);
}

function loadUserTable() {
    const userTableBody = $("#users-table-body");
    if (!userTableBody.length) {
        return;
    }
    userTableBody.html("");
    if (userModelInstance.getAllUsers().isEmpty) {
        userTableBody.html(`<tr><td colspan='7'>No users found.</td></tr>`);
        return;
    } else {
        userTableBody.html(``);
        userDataList.forEach((user, index) => {
            const $row = $("<tr></tr>");
            const userId = user.id || (index + 1);
            $row.html(`
                <td>${userId}</td>
                <td>${user.name}</td>
                <td>${user.role}</td>
                <td>${user.address}</td>
                <td>${user.phone}</td>
                <td>${user.username}</td>
                <td style="display: flex; justify-content: left; gap: 20px;">
                    <i class="bi bi-trash3 user-delete-btn" data-index="${index}"></i>
                    <i class="bi bi-pencil-square user-update-btn" data-index="${index}"></i>
                </td>
            `);
            userTableBody.append($row);
        });
    }
}

export function resetUserPage() {
    loadAllUsers();
}

// Auto-load when the iframe document is ready
$(document).ready(() => {
    loadAllUsers();
    loadUserTable();
});




