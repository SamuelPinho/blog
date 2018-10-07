import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { graphql, StaticQuery } from 'gatsby';

// bulma css
import '../layouts/index.scss';
import '../layouts/utils.scss';

// components
import Header from './header';

const Layout = ({ children }) => (
    <StaticQuery
        query={graphql`
            query SiteTitleQuery {
                site {
                    siteMetadata {
                        title
                    }
                }
            }
        `}
        render={data => (
            <div>
                <Helmet
                    title={data.site.siteMetadata.title}
                    meta={[
                        { name: 'description', content: 'Sample' },
                        { name: 'keywords', content: 'sample, something' },
                    ]}
                />

                <Header siteTitle={data.site.siteMetadata.title} />

                <section className="section">
                    <div className="container">
                        {children}
                    </div>
                </section>
            </div>
        )}
    />
);


Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout;