import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { graphql, StaticQuery } from 'gatsby';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCalendarAlt, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

// bulma css
import '../css/index.scss';

// components
import Header from './Header';
import Footer from './Footer';

library.add(fab, faCalendarAlt, faChevronLeft);

const Layout = ({ children }) => (
    <StaticQuery
        query={graphql`
            query SiteTitleQuery {
                site {
                    siteMetadata {
                        title
                        links {
                            github
                            linkedin
                            medium
                        }
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

                <Header siteTitle={data.site.siteMetadata.title} links={data.site.siteMetadata.links} />

                <section className="section has-background-light">
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
