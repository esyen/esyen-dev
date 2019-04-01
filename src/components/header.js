import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle}) => (
 <header>
    <div
      style={{
        marginLeft: '2rem',
        marginTop: '1rem',
        marginBottom: '0rem',
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h2>
        <Link
          to="/"
          style={{
            color: `black`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h2>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
