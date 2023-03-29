import { useState } from "react";
import { useRouter } from "next/router";
import styles from "../styles/Auth.module.css";
import Layout from "../components/Layout";
import { register } from "../utils/auth";
import { setCookie } from "cookies-next";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const token = await register({ name, email, password }); // faz a chamada à API para cadastrar o usuário e gerar o token JWT
      setCookie("token", token); // armazena o token no cookie
      router.push("/signin"); // redireciona o usuário para a página de login
    } catch (error) {
      setError("Não foi possível cadastrar o usuário");
    }
  };

  return (
    <Layout>
      <div className={styles.container}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <h2 className={styles.title}>Cadastre-se</h2>
          {error && <div className={styles.error}>{error}</div>}
          <div className={styles.formGroup}>
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </div>
          <button type="submit" className={styles.button}>
            Cadastrar
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Signup;
