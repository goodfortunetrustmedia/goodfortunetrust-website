import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";

const NotFoundPage = () => {
  return (
    <Layout>
      <div className="container my-5">
        <h1>Page not found</h1>
        <p>
          Sorry 😔, we couldn’t find what you were looking for.
          <br />
          <br />
          <Link to="/">Go home</Link>.
        </p>
      </div>
    </Layout>
  );
};

export default NotFoundPage;

export const Head = () => <title>Not found</title>;
