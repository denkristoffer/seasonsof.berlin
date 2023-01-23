"use client";

import Image from "next/image";
import styles from "./analytics.module.css";

export default function Pageview() {
  return typeof window !== "undefined" &&
    window.location.host === "seasonsof.berlin" ? (
    <div className={styles.root}>
      <Image
        alt=""
        height={0}
        src="https://seasonsofberlin.goatcounter.com/count?p=/"
        width={0}
        unoptimized
      />
    </div>
  ) : null;
}
