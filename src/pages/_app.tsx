import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />

      <style>{`
        html,
        body {
          margin: 0;
        }
      `}</style>
    </>
  );
}
