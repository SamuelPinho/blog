import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/Layout';

const Tags = ({ pageContext, data }) => {
    return (
        <Layout >
            <div className="box">
                <div className="content">
                    <h1># {pageContext.tag}</h1>
                    {data.allMarkdownRemark.edges.map(({ node }, index) => (
                        <Link to={node.fields.slug}>{node.fields.slug}</Link>
                    ))}
                </div>
            </div>
        </Layout>
    );
};

export default Tags;

export const query = graphql`
    query TagsQuery($tag: String!) {
        allMarkdownRemark(filter: {frontmatter: {tags: {eq: $tag}}}) {
            edges {
                node {
                    fields {
                        slug
                    }
                }
            }
        }
    }
`;
