import mongoose from "mongoose";

interface DocumentResult<T> {
    _doc: T;
}

export interface UserInput extends DocumentResult<UserInput> {
    username: string;
    email: string;
    password: string;
    
    isAvatarImageSet:boolean;
    AvatarImage:string;
  }

const UserSchema = new mongoose.Schema<UserInput>(
  {
    username: { type: String, required: true, unique: true, min: 3, max: 20 },
    email: {
      type: String,
      required: true,
      unique: true,
      max: 50,
    },
    password: { type: String, required: true,min:8 },
    isAvatarImageSet:{
        type:Boolean,
        default:false,
    },
    AvatarImage:{
        type:String,
        default:"",

    },
    
    
  }
);



export default mongoose.model("User", UserSchema);
