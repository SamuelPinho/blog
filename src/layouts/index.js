import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from '../components/header';
import { graphql } from 'gatsby';

const Layout = ({ children, data }) => (
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
                {children()}
            </div>
        </section>
    </div>
);


Layout.propTypes = {
    children: PropTypes.func,
}

export default Layout;

export const query = graphql`
    query SiteTitleQuery {
        site {
            siteMetadata {
                title
            }
        }
    }
`;