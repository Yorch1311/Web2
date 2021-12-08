export interface Login {
  email: string;
  password: string;
}

export interface LoginRes{
  status: number;
  email: string;
  rol: string;
  message: string;
  address: string;
}
