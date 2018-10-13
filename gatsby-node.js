const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);
const _ = require('underscore');

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions
    if (node.internal.type === `MarkdownRemark`) {
        const slug = createFilePath({ node, getNode, basePath: `pages` })
        createNodeField({
            node,
            name: `slug`,
            value: slug,
        });
    }
};

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions;
    const tags = [];


    return new Promise((resolve, reject) => {
        graphql(`
        {
            allMarkdownRemark {
                edges {
                    node {
                        fields {
                            slug
                        }
                        frontmatter {
                            tags
                        }
                    }
                }
            }
        }
        `).then(result => {
                result.data.allMarkdownRemark.edges.forEach(({ node }) => {
                    node.frontmatter.tags.forEach((tag) => {
                        tags.push(tag);
                    });


                    createPage({
                        path: node.fields.slug,
                        component: path.resolve(`./src/templates/blog-post.js`),
                        context: {
                            // Data passed to context is available in page querie as GraphQL variables.
                            slug: node.fields.slug,
                        },
                    });
                });

                _.uniq(tags);

                console.log(tags);

                tags.forEach((tag) => {
                    createPage({
                        path: `/tag/${tag}`,
                        component: path.resolve('./src/templates/tags.js'),
                        context: {
                            tag: tag
                        }
                    });
                });

                resolve()
            })
    })
};
