import { Request, Response, NextFunction } from "express";
import User from "../models/User";
import bcrypt from "bcrypt";


export const register = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { username, email, password:pass } = req.body;
  const usernameExist = await User.findOne({ username:username });
  if (usernameExist)
    return res.json({ msg: "username already used", status: false });
  const emailExist = await User.findOne({ email:email });
  if (emailExist) return res.json({ msg: "email already used", status: false });
  const hasedPassword = await bcrypt.hash(pass, 10);


  const user = await User.create({
    email,
    username,
    password: hasedPassword,
  });
 
 const {password,...others} = user._doc;
 console.log(others);
  return res.json({status:true,user});

};