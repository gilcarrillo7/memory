import * as React from "react";
import { HeadFC, Link, PageProps } from "gatsby";
import Layout from "../components/screens/Layout";

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <div className="text-4xl">
        <h1 className="mb-4">Page not found</h1>
        <Link to="/">Go Back</Link>
      </div>
    </Layout>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>Not found</title>;
