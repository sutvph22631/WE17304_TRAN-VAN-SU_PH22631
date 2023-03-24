import express from "express"
import {getAll,getDetailUser,addUser,updateUser,removeUser} from "../controllers/user.js"

const router =express.Router();

router.get("/users",getAll);
router.get("/users/:id",getDetailUser);
router.post("/users-post",addUser);
router.put("/users-update/:id",updateUser);
router.delete("/user-remove/:id",removeUser)

export default router