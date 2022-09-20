
export class User {
    username: string;
    email:string;
    password:string;
    confirmPassword:string;

   
    constructor(username: string,email: string,password: string,confirmPassword: string) {
      this.username = username;
      this.email = email;
      this.password = password;
      this.confirmPassword = confirmPassword;

    }

   
}


export class UserLogin {
  username: string;
  password:string;
 

 
  constructor(username: string,password: string) {
    this.username = username;
   
    this.password = password;
    

  }

 
}