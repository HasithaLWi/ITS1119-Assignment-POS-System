import { usersDB } from "../db/data.js";
import { User } from "../dto/user.js";

export class UserModel {
    getUserByUsername(username) {
        const user = usersDB.find(user => user.username === username);
        if (!user) {
            alert("User not found.");
            return { isValid: false, user: null };
        }
        return {
            isValid: true,
            user: new User(
                user.id,
                user.username,
                user.password,
                user.role,
                user.name,
                user.address,
                user.phone,
                user.email
            )
        };
    }

    getAllUsers() {
        if (usersDB.length === 0) {
            return { isEmpty: true, users: [] };
        } else {
            return { isEmpty: false, users: [...usersDB] };
        }
    }

    saveUser(newUser) {
        usersDB.push(newUser);
    }

    deleteUser(userId) {
        const index = usersDB.findIndex(user => user.id === userId);
        if (index >= 0 && index < usersDB.length) {
            usersDB.splice(index, 1);
        } else {
            alert("Invalid User ID.");
        }
    }
}

