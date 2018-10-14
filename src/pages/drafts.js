import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout';
import PostPreview from '../components/PostPreview';

const DraftsPage = ({ data }) => (
  <Layout>
    {data.allMarkdownRemark.edges.map(({ node }) => {
      if (node.fields.slug.includes('/drafts')) {
        return <PostPreview data={node} key={node.id} />
      }
      return null
    })}

  </Layout>
);

export default DraftsPage;

export const query = graphql`
  query DraftsQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            tags
            title
            date(formatString: "DD MMMM, YYYY", locale:"pt-br")
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
