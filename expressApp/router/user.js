import express from "express";
import {getUsers} from "../controller/user.js";
import {postUsers} from "../controller/user.js";


const router = express.Router();

router.get("/",getUsers);

router.post("/",postUsers);


export default router;