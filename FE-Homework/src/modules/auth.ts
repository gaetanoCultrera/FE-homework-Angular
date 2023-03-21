export interface User {
  id:number
  email: string;
  password: string;
  name: string;
  role: string;
  avatar: string;
}

export interface Token {
  access_token: string,
  refresh_token: string;
}
