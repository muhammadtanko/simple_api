"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = __importDefault(require("../controllers/user.controller"));
const api = (0, express_1.Router)();
exports.default = () => {
    api.get("/", async (req, res) => {
        try {
            let users = await user_controller_1.default.getUsers();
            res.status(200).json({ ok: true, payload: users });
        }
        catch (error) {
            res.status(500).json({ ok: false, payload: error.message });
        }
    });
    api.get("/:id", async (req, res) => {
        try {
            let id = req.params.id;
            let user = await user_controller_1.default.getUser(id);
            res.status(200).json({ ok: true, payload: user });
        }
        catch (error) {
            res.status(500).json({ ok: false, payload: error.message });
        }
    });
    api.post("/", async (req, res) => {
        try {
            let { firstName, lastName, age } = req.body;
            let newUser = await user_controller_1.default.createUser({ firstName, lastName, age });
            res.status(200).json({ ok: true, payload: newUser });
        }
        catch (error) {
            res.status(500).json({ ok: false, payload: error.message });
        }
    });
    api.put("/:id", async (req, res) => {
        try {
            let id = req.params.id;
            let obj = req.body;
            let updateDetails = await user_controller_1.default.updateUser(id, obj);
            res.status(200).json({ ok: true, payload: updateDetails });
        }
        catch (error) {
            res.status(500).json({ ok: false, payload: error.message });
        }
    });
    api.delete("/:id", async (req, res) => {
        try {
            let id = req.params.id;
            let deletedUser = await user_controller_1.default.deleteUser(id);
            res.status(200).json({ ok: true, deletedUser, payload: "user deleted successfully" });
        }
        catch (error) {
            res.status(500).json({ ok: false, payload: error.message });
        }
    });
    return api;
};
//# sourceMappingURL=user.routes.js.map