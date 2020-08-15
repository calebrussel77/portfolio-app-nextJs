import React, { useEffect, useState } from "react";
import Layout from "../components/hoc/Layout";
import axiosInstance from "../utils/axiosInstance";
import Error from "./_error";

const About = ({ userData, statusCode }) => {
  if (statusCode) {
    console.log(statusCode);
    return <Error status={statusCode} />;
  }
  console.log(statusCode);

  return (
    <Layout title="About Me">
      <div className="flex space-y-2 flex-col items-center">
        <img
          src={userData.avatar_url}
          className="h-20 w-20 rounded-full object-cover object-center border border-gray-600"
          alt={userData.name}
        />
        <p className="text-center text-indigo-600 font-bold">{userData.name}</p>
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  const resp = await axiosInstance.get(
    "https://api.github.com/users/calebrussel77"
  );
  const statusCode = resp.status > 200 ? resp.status : false;
  const userData = await resp.data;

  // By returning { props: userData }, the About component
  // will receive `userData` as a prop at build time
  return {
    props: {
      userData,
      statusCode,
    },
  };
}

export default About;
