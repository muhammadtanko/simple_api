import { Router, Request, Response } from "express";
import userControllers from "../controllers/user.controller";
import {User}from "../model/user.model"

const api: Router = Router();

export default (): Router => {
    api.get("/", async (req: Request, res: Response) => {
        try {
            let users = await userControllers.getUsers();
            res.status(200).json({ ok: true, payload: users });

        } catch (error: any) {
            res.status(500).json({ ok: false, payload: error.message });
        }
    })

    api.get("/:id", async (req: Request, res: Response) => {
        try {
            let id = req.params.id
            let user = await userControllers.getUser(id);
            res.status(200).json({ ok: true, payload: user });

        } catch (error: any) {
            res.status(500).json({ ok: false, payload: error.message });
        }
    })

    api.post("/", async (req: Request, res: Response) => {
        try {
            let { firstName, lastName, age }: User = req.body;
            let newUser = await userControllers.createUser({ firstName, lastName, age });
            res.status(200).json({ ok: true, payload: newUser });

        } catch (error: any) {
            res.status(500).json({ ok: false, payload: error.message });
        }
    })

    api.put("/:id", async (req: Request, res: Response) => {
        try {
            let id = req.params.id
            
            let obj = req.body;
            let updateDetails = await userControllers.updateUser(id, obj);
            res.status(200).json({ ok: true, payload: updateDetails });

        } catch (error: any) {
            res.status(500).json({ ok: false, payload: error.message });
        }
    })

    api.delete("/:id", async (req: Request, res: Response) => {
        try {
            let id = req.params.id;
            let deletedUser = await userControllers.deleteUser(id);
            res.status(200).json({ ok: true, deletedUser, payload: "user deleted successfully" });

        } catch (error: any) {
            res.status(500).json({ ok: false, payload: error.message });
        }
    })
    return api;
}