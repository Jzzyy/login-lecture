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
}

module.exports = UserStorage;