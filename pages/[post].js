import React from "react";
import Layout from "../components/hoc/Layout";
import { useRouter } from "next/router";

const Post = () => {
  const router = useRouter();

  return (
    <Layout title={router.query.post}>
      <div className="text-center ">
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
