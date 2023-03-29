import { createGlobalStyle } from "styled-components";
import { AppProps } from "next/app";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Poppins';
    font-weight: 400;
    font-style: normal;
    src: url('/static/fonts/Poppins-Regular.ttf');
  }

  @font-face {
    font-family: 'Poppins';
    font-weight: 700;
    font-style: normal;
    src: url('/static/fonts/Poppins-Bold.ttf');
  }

  p {
    font-family: 'Poppins';
    font-weight: 400;
  }

  h1 {
    font-family: 'Poppins';
    font-weight: 700;
  }
`;

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
