import React from "react";
import Layout from "../components/hoc/Layout";
import Link from "next/link";

const PostLink = ({ title, slug }) => {
  return (
    <li>
      {/*The as property is use to specify your normal route */}
      {/*The `href` with the `as` is use to give the template of your route*/}
      <Link as={`/${slug}`} href={`/[post]`}>
        <a className="hover:text-indigo-700">{title}</a>
      </Link>
    </li>
  );
};
const Blog = () => (
  <Layout title="My Blog">
    <ul className="flex flex-col space-x-3 justify-center items-center py-10">
      <PostLink slug="react-optimisation-search" title="react optimisation" />
      <PostLink slug="angular-js-optimisation" title="AngularJs optimisation" />
      <PostLink slug="vue-js-optimisation" title="VueJs optimisation" />
    </ul>
  </Layout>
);

export default Blog;
