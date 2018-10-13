import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/Layout';

const Tags = ({ pageContext, data }) => {
    return (
        <Layout >
            <div className="box">
                <div className="content">
                    <h2>Postagens sobre {pageContext.tag}</h2>
                    <hr />
                    <ul>
                        {data.allMarkdownRemark.edges.map(({ node }, index) => (
                            <li className="is-size-5">
                                <Link to={node.fields.slug}>
                                    {node.frontmatter.title}
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
    query TagsQuery($tag: String!) {
        allMarkdownRemark(filter: {frontmatter: {tags: {eq: $tag}}}) {
            edges {
                node {
                    fields {
                        slug
                    }
                    frontmatter {
                        title
                    }
                }
            }
        }
    }
`;
