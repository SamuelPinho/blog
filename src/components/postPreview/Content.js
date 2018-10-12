import React from 'react';
import { Link } from 'gatsby';

import PostTitle from '../shared/PostTitle';

const Content = ({ data }) => (
    <div className="content">
        <PostTitle data={data} />
        <p className="postpreview-content is-size-5">
            {data.frontmatter.description}
        </p>
        <p className="postpreview-readmore is-size-5">
            <Link to={data.fields.slug}>
                Leia mais...
            </Link>
        </p>
    </div >
);

export default Content;