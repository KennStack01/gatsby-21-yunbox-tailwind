import React from "react";
import { graphql } from "gatsby";
import get from "lodash/get";
import { Helmet } from "react-helmet";
import Layout from "../components/layout";

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, "props.data.site.siteMetadata.title");

    return (
      <Layout>
        <div>
          <Helmet title={siteTitle} />
          <h1>Hello, Users!</h1>
        </div>
      </Layout>
    );
  }
}

export default RootIndex;

// export const pageQuery = graphql``
