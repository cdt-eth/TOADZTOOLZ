import React from "react";
import Head from "next/head";

interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps) => {
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
      <link
        rel="preload"
        href="/fonts/Superscratchy.ttf"
        as="font"
        crossOrigin=""
      />
      <link
        rel="preload"
        href="/fonts/Superscratchy.ttf"
        as="font"
        crossOrigin=""
      />
    </Head>
  );
};

export default Header;
