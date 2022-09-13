const router = require("express").Router();
import { register } from "../controllers/userController";



export default router.post("/register",register);

