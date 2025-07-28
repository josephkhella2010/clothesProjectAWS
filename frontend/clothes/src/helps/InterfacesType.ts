export interface UserType {
  username: string;
  email?: string;
  password: string;
  id?: number;
}
export interface SingleUserType {
  username: string;
  email?: string;
  password: string;
  id?: number;
}

export interface TokenType {
  token: string | null;
}
export interface ProductType {
  name: string;
  description: string;
  price: number;
  id?: number;
}
