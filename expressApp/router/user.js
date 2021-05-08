import express from "express";
import {getUsers,postUsers,getUserById,deleteUserById,patchNameById,updateById} from "../controller/user.js";

const router = express.Router();

router.get("/",getUsers);
router.get("/:id",getUserById);
router.post("/",postUsers);
router.delete("/:id",deleteUserById);
router.patch("/:id",patchNameById);
router.put("/:id",updateById);


export default router;