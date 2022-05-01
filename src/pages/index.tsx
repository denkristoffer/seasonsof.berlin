import React from "react";
import type { InferGetStaticPropsType } from "next";
import Head from "next/head";
import Arrow from "../components/arrow";
import type { Season } from "../types";
import Credits from "../components/credits";

export default function Index({
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
          window.location.host === "seasonsof.berlin" && (
            <img
              alt=""
              src="https://seasonsofberlin.goatcounter.com/count?p=/"
            />
          )}
      </div>

      <style jsx>{`
        .root {
          display: grid;
          font-family: system-ui, sans-serif;
          height: 100vh;
          padding-left: 2em;
          padding-right: 1em;
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
          display: list-item;
          font-size: 18px;
          line-height: 1.7;
          list-style-type: "– ";
          position: relative;
        }

        em {
          display: inline-block;
          font-size: 48px;
          font-weight: bold;
          font-style: normal;
          line-height: 1;
          width: max-content;
        }

        @media screen and (min-width: 500px) {
          em {
            transform: translate3d(0, 20px, 0);
          }
        }

        @media screen and (min-width: 600px) {
          span {
            position: absolute;
            top: -40%;
          }

          em {
            left: 0;
            position: absolute;
            top: 100%;
            transform: translate3d(10px, 0, 0);
            z-index: 1;
          }
        }

        @media screen and (min-width: 800px) {
          em {
            left: calc(100% + 10px);
            top: 30%;
            transform: translate3d(5px, 0, 0);
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
