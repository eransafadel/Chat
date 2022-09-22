import { Request, Response, NextFunction } from "express";
import User from "../models/User";
import bcrypt from "bcrypt";

export const register = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { username, email, password: pass } = req.body;
  const usernameExist = await User.findOne({ username: username });
  if (usernameExist)
    return res.json({ msg: "username already used", status: false });
  const emailExist = await User.findOne({ email: email });
  if (emailExist) return res.json({ msg: "email already used", status: false });
  const hasedPassword = await bcrypt.hash(pass, 10);

  const user = await User.create({
    email,
    username,
    password: hasedPassword,
  });

  const { password, ...others } = user._doc;
  console.log(others);
  return res.json({ status: true, others });
};

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { username, password: pass } = req.body;
  const user = await User.findOne({ username: username });
  if (!user)
    return res.json({ msg: "Incorrect username or password", status: false });
  const isPasswordValid = await bcrypt.compare(pass, user.password);
  console.log(pass, user.password);
  if (!isPasswordValid)
    return res.json({ msg: "Incorrect username or password", status: false });

  const { password, ...others } = user._doc;
  return res.json({ status: true, others });
};

export const setAvatar = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userId = req.params.id;
    const avatarImage = req.body.image;
    const userData = await User.findByIdAndUpdate(userId, {
      isAvatarImageSet: true,
      avatarImage,
    });
    return res.json({
      isSet: userData?.isAvatarImageSet,
      image: userData?.AvatarImage,
    });
  } catch (err) {
    next(err);
  }
};
