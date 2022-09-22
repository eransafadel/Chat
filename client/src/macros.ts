export const TITLE_NAME = "Chat";
export const USERNAME_LENGTH:number =3;
export const PASSWORD_LENGTH:number =8;
export const EMPTY:string ="";

export const USER_KEY_LCL_STRG:string ='chat-app-user';
export const AVATAR_API:string ="https://api.multiavatar.com/45678945";


interface Input {
    type:string,
    placeholder:string,
    name:string,
}

export const InputArr:Input[] = [
    {
        type:"text",
        placeholder:"Username",
        name:"username"
    },
    {
        type:"email",
        placeholder:"Email",
        name:"email"
    },
    {
        type:"password",
        placeholder:"Password",
        name:"password"
    },
    {
        type:"password",
        placeholder:"Confirm Password",
        name:"confirmPassword"
    }
]


export const InputArrLogin:Input[] = [
    {
        type:"text",
        placeholder:"Username",
        name:"username"
    },
   
    {
        type:"password",
        placeholder:"Password",
        name:"password"
    },
]