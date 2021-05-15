import express from "express";
import {getUsers,postUser,deleteUserById,updateUserNameById,getUserById} from "../controller/user.js";


const router = express.Router();

router.get("/",getUsers);
router.get("/:id",getUserById);
router.post("/",postUser);
router.delete("/:id",deleteUserById);
router.patch("/:id",updateUserNameById);



export default router;