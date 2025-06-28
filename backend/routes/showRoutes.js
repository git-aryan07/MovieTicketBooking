import express from "express";
import { addShow, getNowPlayingMovies, getShow, getShows } from "../controllers/showController.js";
import { protectadmin } from "../middleware/auth.js";

const showRouter=express.Router();

showRouter.get('/now-playing',protectadmin,getNowPlayingMovies)
showRouter.post('/add',protectadmin,addShow)
showRouter.get('/all',getShows)
showRouter.get('/:movieId',getShow)


export default showRouter;