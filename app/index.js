import {users} from "./DB/DB.js";
import {createUsers} from "./components/createUsers.js";
import {LStorage} from "./LS/LStorage.js";

if (LStorage.get('users').length === 0) {
    LStorage.set('users', users);
}

createUsers();