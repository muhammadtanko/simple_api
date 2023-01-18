import mongoose from "mongoose";
let { model, Schema } = mongoose;

let userSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    age: { type: Number, required: true }
})
type User = {
    firstName: string;
    lastName: string;
    age: number
}
const userModel = model("model",userSchema);
export {userModel,User}