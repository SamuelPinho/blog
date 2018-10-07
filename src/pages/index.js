import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout';

const IndexPage = ({ data }) => (
  <Layout>
    <h4 className="subtitle">{data.allMarkdownRemark.totalCount} Posts </h4>

    {data.allMarkdownRemark.edges.map(({ node }) => (
      <div key={node.id}>
        <Link to={node.fields.slug}>
          <h3>
            {node.frontmatter.title}{" "}
            <span> - {node.frontmatter.date}</span>
            {node.frontmatter.tags.map((tag, index) => (
              <span key={index}> - {tag}</span>
            ))}
          </h3>
        </Link>
        <p>{node.excerpt}</p>
      </div>
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
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;
