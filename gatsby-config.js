module.exports = {
  siteMetadata: {
    title: 'Samuel Monteiro',
    links: {
      github: 'https://github.com/SamuelPinho',
      linkedin: 'https://www.linkedin.com/in/samuelmpinho/',
      medium: 'https://medium.com/@samuelmonteiro',
    },
  },
  pathPrefix: "/blog",
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              classPrefix: 'language-',
              showLineNumbers: true
            }
          }
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png',
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/blog`,
      },
    },
    'gatsby-plugin-offline',
  ],
}
