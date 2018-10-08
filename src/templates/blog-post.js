import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';

import "prismjs/themes/prism.css";

export default ({ data }) => {
    const post = data.markdownRemark;
    return (
        <Layout>
            <div className="content box">
                <h6>
                    <p className="postpreview-title is-size-1">{post.frontmatter.title}</p>
                    <small className="has-text-grey">
                        postado em <strong>{post.frontmatter.date}</strong>
                    </small>
                </h6>
                <p className="has-text-grey">{post.frontmatter.description}</p>
                <hr />
                <div dangerouslySetInnerHTML={{ __html: post.html }} />
            </div>
        </Layout>
    );
};

export const query = graphql`
    query BlogPostQuery($slug: String!) {
        markdownRemark(fields: { slug: {eq: $slug } }) {
            html
            frontmatter {
                tags
                title
                date(formatString: "DD MMMM, YYYY", locale:"pt-br")
                categorias
                description
            }
        }
    }
`;