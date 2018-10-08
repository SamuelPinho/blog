import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout';
import PostPreview from '../components/postPreview';

const IndexPage = ({ data }) => (
  <Layout>
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <PostPreview data={node} />
    ))}

  </Layout>
);

export default IndexPage;

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            tags
            title
            date(formatString: "DD MMMM, YYYY", locale:"pt-br")
            categorias
            description
          }
          fields {
            slug
          }
          excerpt(pruneLength: 290)
        }
      }
    }
  }
`;
