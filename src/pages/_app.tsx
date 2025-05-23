import { AppProps } from 'next/app';
import { Geist, Geist_Mono, Inter } from "next/font/google";
import Head from 'next/head';
import '../styles/globals.css';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>3D Portfolio</title>
        <meta name="description" content="A modern, interactive 3D portfolio website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} antialiased`}>
        <Component {...pageProps} />
      </main>
    </>
  );
}
