import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/Layout';

const Tags = ({ pageContext, data }) => {
    return (
        <Layout >
            <div className="box">
                <div className="content">

                    <div className="level is-margin-bottom-0">
                        <div className="level-left">
                            <div className="level-item">
                                <h2>
                                    <span className="has-text-weight-normal">
                                        Postagens sobre
                                    </span>
                                    &nbsp;{pageContext.tag}
                                </h2>
                            </div>
                        </div>
                        <div className="level-right">
                            <div className="level-item">
                                <Link to='/tags' className="button is-text">
                                    Ver todas as tags
                                </Link>
                            </div>
                        </div>
                    </div>

                    <hr className="is-margin-top-0" />
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
        </Layout >
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
