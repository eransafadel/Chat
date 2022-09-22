import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { AVATAR_API, USER_KEY_LCL_STRG } from "../macros";
import { UserLogin } from "../User";
import { toast, ToastContainer, ToastOptions } from "react-toastify";
import loader from "..assets/loader.gif";
import "react-toastify/dist/ReactToastify.css";
import { publicRequest, setAvatarRoute } from "../api/APIRoutes";
import {
  Container,
  TitleAvatar,
  Avatars,
  Avatar,
  SubmitBtn,
} from "./SetAvatar.styles";
import { Buffer } from "buffer";

const SetAvatar = () => {
  const navigate = useNavigate();
  const [avatars, setAvatars] = useState<string[]>([""]);
  const [isLoading, setIsloading] = useState(true);
  const [selectedAvatar, setSelectedAvatar] = useState<number | undefined>(
    undefined
  );
  const toastOptions: ToastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  useEffect(() => {
    const checkLogin = async () => {
      if (!localStorage.getItem(USER_KEY_LCL_STRG)) navigate("/login");
    };

    checkLogin();
  }, []);

  const setProfilePicture = async () => {
    if (selectedAvatar === undefined) {
      console.log("gggg");
      toast.error("please select an avatar", toastOptions);
    } else {
      const user = await JSON.parse(
        localStorage.getItem(USER_KEY_LCL_STRG) || "{}"
      );
      const { data } = await publicRequest.post(
        `${setAvatarRoute}/${user._id}`,
        {
          image: avatars[selectedAvatar],
        }
      );
      if (data.isSet) {
        user.isAvatarImageSet = true;
        user.avatarImage = data.image;
        localStorage.setItem(USER_KEY_LCL_STRG, JSON.stringify(user));
        navigate("/");
      } else {
        toast.error("Error setting avatar,please try again ", toastOptions);
      }
    }
  };

  useEffect(() => {
    const pullData = async () => {
      const data: string[] = [];
      for (let i = 0; i < 4; i++) {
        const image = await publicRequest.get(
          `${AVATAR_API}/${Math.round(Math.random() * 1000)}`
        );
        const buffer = new Buffer(image.data);
        data.push(buffer.toString("base64"));
      }

      setAvatars(data);
      setIsloading(false);
    };

    pullData();
  }, []);

  console.log("data is :", avatars);

  return (
    <Container>
      <TitleAvatar>Pick an avatar as your profile picture</TitleAvatar>

      <Avatars>
        {avatars.map((item: any, index: number) => {
          const bgColor =
            index === selectedAvatar ? " 0.4rem solid #4e0eff" : "";
          return (
            <Avatar key={index} style={{ border: bgColor }}>
              <img
                src={`data:image/svg+xml;base64,${item}`}
                alt="avatar"
                key={item}
                onClick={() => setSelectedAvatar(index)}
              />
            </Avatar>
          );
        })}
      </Avatars>
      <SubmitBtn onClick={setProfilePicture}>Set as profile picture</SubmitBtn>
      <ToastContainer />
    </Container>
  );
};

export default SetAvatar;
