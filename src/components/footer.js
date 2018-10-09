import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = ({ links }) => (
    <footer className="footer fixed-footer">
        <div className="content has-text-centered">
            Samuel Monteiro Pinho
            <div className="content">
                <span className="icon is-large">
                    <a href={links.github}>
                        <FontAwesomeIcon icon={['fab', 'github']} size="2x" />
                    </a>
                </span>
                <span className="icon is-large">
                    <a href={links.linkedin}>
                        <FontAwesomeIcon icon={['fab', 'linkedin']} size="2x" />
                    </a>
                </span>
                <span className="icon is-large">
                    <a href={links.medium}>
                        <FontAwesomeIcon icon={['fab', 'medium']} size="2x" />
                    </a>
                </span>
            </div>
            <div className="content">
            </div>
        </div>
    </footer>
);

export default Footer;
