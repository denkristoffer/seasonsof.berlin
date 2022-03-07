import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />

      <style>{`
        html,
        body {
          background: #fdfdfd;
          color: #080808;
          margin: 0;
        }
      `}</style>
    </>
  );
}
