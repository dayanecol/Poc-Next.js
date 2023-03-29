import api from "../utils/api";

const login = async (email: string, password: string) => {
  const response = await api.post("/auth/login", { email, password });
  return response.data.token;
};

export { login };
