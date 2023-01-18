import { userModel, User } from "../model/user.model";

class UserController {
    constructor() { }

    async createUser({ firstName, lastName, age }: User) {
        let user = new userModel({ firstName, lastName, age });
        let result = await user.save();
        return result;
    }

    async getUsers() {
        let result = await userModel.find();
        return result;
    }

    async getUser(id: string) {
        let result = await userModel.findById(id);
        return result;
    }

    async updateUser(id: string, obj: any) {
        let result = await userModel.findByIdAndUpdate(id, obj);
        return result;
    }
    async deleteUser(id: string) {
        let result = await userModel.findByIdAndDelete(id);
        return result;
    }
}

export default new UserController();