"use strict"

class UserStorage {
    static #users = {
        id: ["이재현","passby","259"],
        psword: ["8468","1234","0000"],
        name: ["a","b","c"],
    };

    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if(users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;

    };

    static getUserInfo(id) {
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users);
        const userInfo = usersKeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {});

        return userInfo;    
    }
    
    static save(userInfo) {
        const users = this.#users;
        users.name.push[userInfo.name];
        users.id.push[userInfo.id];
        users.psword.push[userInfo.psword];
        return {success: true};

    }
}

module.exports = UserStorage;