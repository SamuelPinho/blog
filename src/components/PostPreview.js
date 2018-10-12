import React from 'react';

import Content from './postPreview/Content';
import CategoriesAndTags from './shared/CategoriesAndTags';

const PostPreview = ({ data }) => (
    <div className="box grow" >
        <article className="media">
            <div className="media-content">
                <Content data={data} />
                <CategoriesAndTags data={data} />
            </div>
        </article>
    </div>
);

export default PostPreview;
