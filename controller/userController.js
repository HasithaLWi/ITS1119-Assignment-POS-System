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
                <td>
                    <i class="fa fa-trash user-delete-btn text-danger" data-index="${index}" style=" width: 15px;  padding: 0px 5px; cursor: pointer;"></i>
                    <i class="fa fa-edit user-update-btn text-primary" data-index="${index}" style=" width: 15px; padding: 0px 5px; cursor: pointer;"></i>
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




