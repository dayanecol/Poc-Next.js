import jwt from "jsonwebtoken";
import { NextApiRequest, NextApiResponse } from "next";
import api from "./api";
import { setCookie, getCookie, deleteCookie } from "cookies-next";

const JWT_SECRET = "top_secret";

// Função para criar um novo token JWT
export const createToken = (payload: any): string => {
  const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "1d" });
  return token;
};

// Middleware para verificar o token JWT
export const verifyToken = (req: NextApiRequest, res: NextApiResponse) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    return decoded;
  } catch (error) {
    throw new Error("Token inválido");
  }
};

interface Credentials {
  email: string;
  password: string;
}

// Função para realizar o login do usuário e retornar o token JWT
export const login = async (credentials: Credentials): Promise<string> => {
  try {
    // Faz a chamada à API para verificar as credenciais do usuário
    const response = await api.post("/auth/sign-in", credentials);
    const userData = response.data;
    console.log("userData", userData.token);
    const token = userData.token;
    // Gera o token JWT com os dados do usuário
    // const token = createToken(userData.token);
    // console.log("token", token);
    setCookie("token", token); // armazena o token no cookie

    return token;
  } catch (error) {
    throw new Error("Usuário ou senha inválidos");
  }
};

// Função para realizar o logout do usuário
export const logout = () => {
  deleteCookie("token"); // remove o cookie do token
};

export interface User {
  id: string;
  name: string;
  email: string;
}

export const getUser = (): User | null => {
  const token = getCookie("token");
  if (!token) {
    return null;
  }

  if (typeof token !== "string") {
    return null;
  }

  const decodedToken: any = jwt.decode(token);

  const user: User = {
    id: decodedToken.sub,
    name: decodedToken.name,
    email: decodedToken.email,
  };

  return user;
};

interface RegisterData {
  name: string;
  email: string;
  password: string;
}

export const register = async (data: RegisterData): Promise<void> => {
  try {
    await api.post("/users/", data);
  } catch (error) {
    throw new Error("Não foi possível criar a conta");
  }
};
