import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import DateInput from "../src/DateInput";

export default function Home(): JSX.Element {
  return (
    <div className={styles.container}>
      <Head>
        <title>Date Emperor</title>
        <meta name="description" content="Cool ways to describe dates" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <DateInput />
      </main>
    </div>
  );
}
