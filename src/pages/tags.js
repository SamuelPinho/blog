import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';

const _ = require('underscore');

const Tags = ({ data }) => {

    let tags = [];

    data.allMarkdownRemark.edges.forEach(({ node }) => {
        tags.push(...node.frontmatter.tags);
    });

    tags = _.uniq(tags);

    return (
        <Layout>
            <div className="box">
                <div className="content">
                    <h1>Tags</h1>
                    <hr />
                    <ul>
                        {tags.map((tag, index) => (
                            <li key={index} className="is-size-5">
                                <Link to={`/tag/${tag}`} >
                                    {tag}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </Layout>
    );
};

export default Tags;

export const query = graphql`
  query AllTagsQuery {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            tags
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;