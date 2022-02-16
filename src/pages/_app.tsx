import { useEffect } from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { init as initApm } from '@elastic/apm-rum';

import GlobalStyle from 'styles/global';

declare const APP_VERSION: string;

const MyApp = ({ Component, pageProps }: AppProps) => {

  const initElasticApm = () => {
    if (!process.env.NEXT_PUBLIC_ELASTIC_APM_URL) return;
    initApm({
      serviceName: process.env.NEXT_PUBLIC_ELASTIC_APM_SERVICE_NAME,
      serviceVersion: APP_VERSION,
      serverUrl: process.env.NEXT_PUBLIC_ELASTIC_APM_URL,
      environment: process.env.NEXT_PUBLIC_ENV,
    });
  };

  useEffect(() => {
    initElasticApm();
  }, []);

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
