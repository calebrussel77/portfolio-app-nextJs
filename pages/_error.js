import Layout from "../components/hoc/Layout";

const Error = ({ status }) => {
  return (
    <Layout title="Error">
      <div className="text-center py-6">
        {status
          ? `Could not load data, status : ${status}`
          : `Couldn't get that page, sorry !`}
      </div>
    </Layout>
  );
};

export default Error;
