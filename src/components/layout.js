import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { graphql, StaticQuery } from 'gatsby';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

// bulma css
import '../layouts/index.scss';

// components
import Header from './header';
import Footer from './footer';

library.add(fab);

const Layout = ({ children }) => (
    <StaticQuery
        query={graphql`
            query SiteTitleQuery {
                site {
                    siteMetadata {
                        title
                        links { ... }
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

                <section className="section has-background-light has-navbar-fixed-top">
                    <div className="container">
                        <div className="columns">
                            <div className="column is-8 is-mobile is-offset-2">
                                {children}
                            </div>
                        </div>
                    </div>
                </section>

                <Footer links={data.site.siteMetadata.links} />

            </div>
        )}
    />
);


Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout;
