import React from 'react';

import Content from './postPreview/Content';
import Tags from './shared/Tags';

const PostPreview = ({ data }) => (
    <div className="box grow" >
        <article className="media">
            <div className="media-content">
                <Content data={data} />
                <Tags data={data} />
            </div>
        </article>
    </div>
);

export default PostPreview;
