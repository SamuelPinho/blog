import React from 'react';
import { Link, graphql } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Layout from '../components/layout';
import PostTitle from '../components/shared/PostTitle';
import CategoriesAndTags from '../components/shared/CategoriesAndTags';

import "prismjs/themes/prism.css";

export default ({ data }) => {
    const post = data.markdownRemark;
    return (
        <Layout>
            <div className="box">
                <div className="content">
                    <PostTitle data={post} />
                    <p className="has-text-grey postpreview-content">{post.frontmatter.description}</p>

                    <CategoriesAndTags data={post} />

                    <hr className="post-divider" />
                    <div dangerouslySetInnerHTML={{ __html: post.html }} />
                </div>

                <hr />
                <Link to="/" className="button is-white">
                    <span className="icon" >
                        <FontAwesomeIcon icon='chevron-left' />
                    </span>
                    <span>Voltar para página inicial</span>
                </Link>
            </div>
        </Layout>
    );
};

export const query = graphql`
    query BlogPostQuery($slug: String!) {
        markdownRemark(fields: {slug: {eq: $slug } }) {
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