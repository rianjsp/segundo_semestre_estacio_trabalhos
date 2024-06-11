// pages/_app.tsx
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/app/globals.css';
import { AppProps } from 'next/app';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <meta name='viewport' content='width=device-width, initial-scale=1'/>
            </Head>
            <Component {...pageProps} />
        </>
  )
}

export default MyApp;
