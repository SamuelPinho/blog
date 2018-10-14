import React from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = ({ siteTitle, links }) => (
  <nav className="navbar is-white has-text-grey" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <Link className="navbar-item navbar-center" to="/">
        {siteTitle}
      </Link>
    </div>

    <div className="navbar-menu">
      <div className="navbar-start">
        <Link className="navbar-item" to='/tags'>
          Tags
        </Link>
        <Link className="navbar-item" to='/drafts'>
          Rascunhos
        </Link>
      </div>
      <div className="navbar-end">
        <div className="navbar-item">
          <div className="buttons">

            <a className="button is-text" href={links.github}>
              <span className="icon" >
                <FontAwesomeIcon icon={['fab', 'github']} />
              </span>
              <span>GitHub</span>
            </a>

            <a className="button is-text" href={links.linkedin}>
              <span className="icon" >
                <FontAwesomeIcon icon={['fab', 'linkedin']} />
              </span>
              <span>Linkedin</span>
            </a>

            <a className="button is-text" href={links.medium}>
              <span className="icon" >
                <FontAwesomeIcon icon={['fab', 'medium-m']} />
              </span>
              <span>Medium</span>
            </a>

          </div>
        </div>
      </div>
    </div>
  </nav>
);

export default Header;
