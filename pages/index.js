import Head from "next/head";
import Layout from "../components/hoc/Layout";
import NProgress from "nprogress";
import Router from "next/router";

Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();

Router.onRouteChangeError = () => NProgress.done();

const Home = () => {
  return (
    <Layout title="The Home">
      <h1 className="text-center my-5 text-lg font-bold">
        Welcome to the Home Page
      </h1>
    </Layout>
  );
};

export default Home;
