import Link from "next/link";
export default function Home() {
  return (
    <main>
      <h1>Luderia</h1>
      <ul>
        <li>
          <label>Jogo</label> Tokaido
          <a href="https://ludopedia.com.br/jogo/tokaido"> Ludopedia </a>
          <Link href="/LoginPage">Login</Link>
          <Link href="/App">Posts</Link>
        </li>
      </ul>
    </main>
  );
}
