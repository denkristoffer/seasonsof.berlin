import React from "react";
import type { InferGetStaticPropsType } from "next";
import Head from "next/head";
import Arrow from "../components/arrow";
import type { Season } from "../types";
import Credits from "../components/credits";

export const config = {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  unstable_runtimeJS: false,
};

export default function Home({
  seasons = [],
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>The seasons of Berlin</title>
      </Head>

      <div className="root">
        <div>
          <h1>The {seasons.length} seasons of Berlin</h1>

          <ol>
            {seasons.map((season) => {
              return (
                <li key={season.name}>
                  {season.name}
                  {season.isActive && (
                    <span>
                      <Arrow />
                      <em>You are here</em>
                    </span>
                  )}
                </li>
              );
            })}
          </ol>
        </div>

        <Credits />

        {typeof window !== "undefined" &&
        window.location.host === "seasonsof.berlin" ? (
          <img alt="" src="https://seasonsofberlin.goatcounter.com/count?p=/" />
        ) : null}
      </div>

      <style>{`
        .root {
          display: grid;
          font-family: system-ui, sans-serif;
          height: 100vh;
          place-items: center;
        }

        h1 {
          font-size: 18px;
          font-style: normal;
          font-weight: normal;
          margin: 0 0 34px;
        }

        ol {
          display: flex;
          flex-direction: column;
          margin: auto;
          padding: 0;
        }

        li {
          display: block;
          font-size: 18px;
          line-height: 1.7;
          position: relative;
          list-style-type: "- ";
        }

        em {
          display: inline-block;
          font-size: 48px;
          font-weight: bold;
          font-style: normal;
          left: -40px;
          line-height: 1;
          position: absolute;
          text-shadow: 3px 3px #fff, 3px 2px #fff, 3px 1px #fff, 3px 0px #fff,
            3px -1px #fff, 3px -2px #fff, 3px -3px #fff, 2px 3px #fff,
            2px 2px #fff, 2px 1px #fff, 2px 0px #fff, 2px -1px #fff,
            2px -2px #fff, 2px -3px #fff, 1px 3px #fff, 1px 2px #fff,
            1px 1px #fff, 1px 0px #fff, 1px -1px #fff, 1px -2px #fff,
            1px -3px #fff, 0px 3px #fff, 0px 2px #fff, 0px 1px #fff,
            0px -1px #fff, 0px -2px #fff, 0px -3px #fff, -1px 3px #fff,
            -1px 2px #fff, -1px 1px #fff, -1px 0px #fff, -1px -1px #fff,
            -1px -2px #fff, -1px -3px #fff, -2px 3px #fff, -2px 2px #fff,
            -2px 1px #fff, -2px 0px #fff, -2px -1px #fff, -2px -2px #fff,
            -2px -3px #fff, -3px 3px #fff, -3px 2px #fff, -3px 1px #fff,
            -3px 0px #fff, -3px -1px #fff, -3px -2px #fff, -3px -3px #fff;
          top: 100%;
          width: max-content;
          z-index: 1;
        }

        @media screen and (min-width: 600px) {
          span {
            position: absolute;
            top: -50%;
          }

          em {
            left: 0;
          }
        }

        @media screen and (min-width: 800px) {
          em {
            left: calc(100% + 10px);
            top: 30%;
          }
        }
      `}</style>
    </>
  );
}

export const getStaticProps = async () => {
  const response = await fetch(`${process.env.ROOT_DOMAIN!}/api/data`);
  const seasons = (await response.json()) as Season[];

  return {
    props: {
      seasons,
    },
  };
};
