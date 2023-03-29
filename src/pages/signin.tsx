import { useState } from "react";
import { useRouter } from "next/router";
import styles from "../styles/Auth.module.css";
import Layout from "../components/Layout";
import { login } from "../utils/auth";
import { setCookie } from "cookies-next";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const token = await login({ email, password }); // faz a chamada à API para verificar as credenciais do usuário e gerar o token JWT
      setCookie("token", token); // armazena o token no cookie
      router.push("/"); // redireciona o usuário para a página inicial
    } catch (error) {
      setError("Usuário ou senha inválidos");
    }
  };

  return (
    <Layout>
      <div className={styles.container}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <h2 className={styles.title}>Faça login</h2>
          {error && <div className={styles.error}>{error}</div>}
          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>
              E-mail
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className={styles.input}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password" className={styles.label}>
              Senha
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className={styles.input}
              required
            />
          </div>
          <button type="submit" className={styles.button}>
            Entrar
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Signin;
