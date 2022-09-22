const router = require("express").Router();
import { register,login,setAvatar } from "../controllers/userController";



  router.post("/register",register);
  router.post("/login",login);
  router.post("/setAvatar/:id",setAvatar);

module.exports = router;

