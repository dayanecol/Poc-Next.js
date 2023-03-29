import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/Header.module.css";

const Header: React.FC = () => {
  const router = useRouter();

  return (
    <header className={styles.container}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.logo}>
          Minha Luderia
        </Link>
        <ul className={styles.menu}>
          <li className={router.pathname === "/" ? styles.active : ""}>
            <Link href="/">Início</Link>
          </li>
          <li
            className={
              router.pathname.startsWith("/signup") ? styles.active : ""
            }
          >
            <Link href="/signup">Cadastro</Link>
          </li>
          <li
            className={
              router.pathname.startsWith("/games") ? styles.active : ""
            }
          >
            <Link href="/games">Jogos</Link>
          </li>
          <li
            className={
              router.pathname.startsWith("/rentals") ? styles.active : ""
            }
          >
            <Link href="/rentals">Locações</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
