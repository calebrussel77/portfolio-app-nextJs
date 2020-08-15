import React from "react";
import Layout from "../components/hoc/Layout";
import Router from "next/router";

const Post = () => {
  const title = Router.query.title.replace("-", " ");
  return (
    <Layout>
      <div className="text-center ">
        <h1 className="font-bold text-indigo-700 py-2 border-b border-indigo-700 my-2 text-lg">
          {title}
        </h1>
        <p className="text-sm text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias atque
          delectus dicta, dignissimos dolorem doloribus eum excepturi in maxime
          minima necessitatibus optio possimus praesentium reiciendis sapiente
          temporibus veritatis? Excepturi, saepe!
        </p>
      </div>
    </Layout>
  );
};

export default Post;
