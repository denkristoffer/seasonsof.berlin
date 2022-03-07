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

        @media (prefers-color-scheme: dark) {
          html,
          body {
            background: #131516;
            color: #e3e1dd;
          }
        }
      `}</style>
    </>
  );
}
