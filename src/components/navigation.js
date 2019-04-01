import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"

const navLink = ({ siteTitle, menuLinks }) => (
  <div style={{ display: 'flex', 'flex-direction':'column'}}>
    {
      menuLinks.map(link =>
        <li key={link.name} style={{ 'listStyleType': 'none' }}>
          <Link to={link.link} style={{ textDecoration: 'none', color: 'black'}}>{link.name}</Link>
        </li>)
    }
  </div>
)

navLink.propTypes = {
  siteTitle: PropTypes.string,
}

navLink.defaultProps = {
  siteTitle: ``,
}

export default navLink
