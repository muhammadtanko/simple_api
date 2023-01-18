"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_model_1 = require("../model/user.model");
class UserController {
    constructor() { }
    async createUser({ firstName, lastName, age }) {
        let user = new user_model_1.userModel({ firstName, lastName, age });
        let result = await user.save();
        return result;
    }
    async getUsers() {
        let result = await user_model_1.userModel.find();
        return result;
    }
    async getUser(id) {
        let result = await user_model_1.userModel.findById(id);
        return result;
    }
    async updateUser(id, obj) {
        let result = await user_model_1.userModel.findByIdAndUpdate(id, obj);
        return result;
    }
    async deleteUser(id) {
        let result = await user_model_1.userModel.findByIdAndDelete(id);
        return result;
    }
}
exports.default = new UserController();
//# sourceMappingURL=user.controller.js.map