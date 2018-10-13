import React from 'react';

const Tags = ({ data }) => (
    <div className="tags postpreview-tags">
        {data.frontmatter.tags.map((tag, index) => (
            <span className="tag" key={index}>{tag}</span>
        ))}
    </div>
);

export default Tags;