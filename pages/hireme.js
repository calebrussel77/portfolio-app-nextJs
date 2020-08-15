import React from "react";
import Link from "next/link";
import Layout from "../components/hoc/Layout";

const About = () => {
  return (
    <Layout title="Hire Me">
      <h1 className="text-center font-bold mx-3">
        {" "}
        Bienvenu ! contact moi ici !
      </h1>
      <img src="/javascript-img.jpg" alt="javascript-image" height="200px" />
    </Layout>
  );
};
export default About;
