import React from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PostPreview = ({ data }) => (
    <div className="box" key={data.id}>
        <article className="media">
            <div className="media-content">
                <div className="content">
                    <p>
                        <Link to={data.fields.slug}>
                            <h3 className="postpreview-title is-link">{data.frontmatter.title}</h3>
                        </Link>
                        <small className="has-text-grey">
                            postado em <strong>{data.frontmatter.date}</strong>
                            <span className="icon">
                                <FontAwesomeIcon icon='calendar-alt' size="" />
                            </span>
                        </small>
                        <br />
                        <p className="postpreview-content is-size-5">

                            {data.frontmatter.description}
                        </p>
                        <p className="postpreview-readmore is-size-5">
                            <Link to={data.fields.slug}>
                                <p>Leia mais...</p>
                            </Link>
                        </p>
                    </p>
                </div>
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
            </div>
        </article>
    </div>
);

export default PostPreview;
