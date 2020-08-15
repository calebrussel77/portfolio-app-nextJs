import Layout from "../components/hoc/Layout";

const Error = ({ statusCode }) => {
  return (
    <Layout title="Error">
      <div className="text-center py-6">
        {statusCode
          ? `An error ${statusCode} occurred on server`
          : "An error occurred on client"}
      </div>
    </Layout>
  );
};

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
