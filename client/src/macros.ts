export const TITLE_NAME = "Chat";


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