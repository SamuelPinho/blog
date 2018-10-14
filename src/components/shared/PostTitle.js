import React from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PostTitle = ({ data }) => {
    let title;

    if (data.fields !== undefined) {
        title =
            <Link to={data.fields.slug}>
                <h1 className="postpreview-title is-link">{data.frontmatter.title}</h1>
            </Link>;
    } else {
        title = <h1 className="postpreview-title">{data.frontmatter.title}</h1>
    }

    return (
        <div className="has-text-grey">
            {title}
            <small className="has-text-grey">
                {data.frontmatter.date}
                <span className="icon">
                    <FontAwesomeIcon icon='calendar-alt' />
                </span>
            </small>
        </div>
    );
};

export default PostTitle;