import React from 'react';

const CategoriesAndTags = ({ data }) => (
    <nav className="level is-mobile">
        <div className="level-left">
            <div className="tags postpreview-tags">
                {data.frontmatter.categorias.map((tag, index) => (
                    <span className="tag is-info is-medium" key={index}>{tag}</span>
                ))}
                {data.frontmatter.tags.map((tag, index) => (
                    <span className="tag is-medium" key={index}>{tag}</span>
                ))}
            </div>
        </div>
    </nav>
);

export default CategoriesAndTags;