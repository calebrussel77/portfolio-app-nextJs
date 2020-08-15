import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Head from "next/head";

const Layout = (props) => {
  return (
    <div className="root">
      <Head>
        <title> My portFolio - app </title>
      </Head>
      <Header />
      <div className="container px-3 mx-auto mt-10">
        <h1 className="text-center font-bold mx-3">{props.title}</h1>
        {props.children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
