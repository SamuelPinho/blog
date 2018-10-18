import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import PostPreview from '../components/PostPreview';

const Tags = ({ pageContext, data }) => {
    return (
        <Layout >
            <h1 className="is-size-2 has-text-weight-bold">
                # {pageContext.tag}
            </h1>
            <br />
            {data.allMarkdownRemark.edges.map(({ node }, index) => {
                if (!node.fields.slug.includes('/drafts')) {
                    return <PostPreview data={node} key={node.id} />;
                }
                return null;
            })}
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
                        tags
                        title
                        date(formatString: "DD MMMM, YYYY", locale:"pt-br")
                        description
                    }
                }
            }
        }
    }
`;
