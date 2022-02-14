import type { AppProps } from 'next/app';
import Head from 'next/head';

import GlobalStyle from 'styles/global';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Bootstrap NextJS - Seu Guru</title>
        <meta name="description" content="Bootstrap NextJS - Seu Guru" />
        <link rel="icon" href="favicon.svg" type="images/svg" />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
