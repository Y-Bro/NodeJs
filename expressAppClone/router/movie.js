import express from "express";
import {getMovies,addMovies,getMovieById,deleteMovieById,updateMovieById} from "../controller/movie.js"

const router = express.Router();

router.get("/",getMovies);
router.post("/",addMovies);
router.get("/:id",getMovieById);
router.delete("/:id",deleteMovieById);
router.put("/:id",updateMovieById);

export default router;