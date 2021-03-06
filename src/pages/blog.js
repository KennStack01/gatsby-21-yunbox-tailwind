import React from "react";
import { graphql } from "gatsby";
import get from "lodash/get";
import { Helmet } from "react-helmet";
import Layout from "../components/layout";

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, "props.data.site.siteMetadata.title");

    return (
      <Layout>
        <div>
          <Helmet title={siteTitle} />
        </div>
      </Layout>
    );
  }
}

export default BlogIndex;

// export const pageQuery = graphql``;
