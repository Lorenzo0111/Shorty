import "@/styles/globals.css";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Head from "next/head";
import { Inter } from "next/font/google";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";

config.autoAddCss = false

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={inter.className}>
      <SessionProvider session={pageProps.session}>
        <Head>
          <title>Shorty - Short your boring url</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Component {...pageProps} />
      </SessionProvider>
    </main>
  );
}
