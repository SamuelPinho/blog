import React from 'react';
import { Link } from 'gatsby';

const Tags = ({ data }) => (
    <div className="tags postpreview-tags">
        {data.frontmatter.tags.map((tag, index) => (
            <Link to={`/tag/${tag}`} className="tag">
                <span key={index}>{tag}</span>
            </Link>
        ))}
    </div >
);

export default Tags;