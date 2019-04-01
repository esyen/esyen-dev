/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"
import { css } from "@emotion/core"

import Header from "./header"
import Navigation from "./navigation"
import Image from "../components/image"
import "./layout.css"
import "typeface-cormorant-garamond"
import "typeface-roboto-mono"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            menuLinks {
              name
              link
            }
          }
        }
      }
    `}
    render={data => (
      <>
    
      <Header siteTitle={data.site.siteMetadata.title} />
     
<div Container style = {{ display: 'flex', 'align-items':'stretch', flex:1, marginLeft:'3rem',marginRight:'3rem'}}>      
  <nav style = {{'flex-basis':'10rem'}}>
    <Navigation menuLinks={data.site.siteMetadata.menuLinks} siteTitle={data.site.siteMetadata.title} />

  <div style={{ maxWidth: `90%`, marginTop:'1rem', marginBottom: '1rem'}}>
    <Image />
  </div>
  <footer>
            <h6>© {new Date().getFullYear()}</h6>
          </footer>
</nav>

        <main style={{'flex':1, marginLeft:'1rem'}}>
          {children}
          </main>
</div>  
        {/*
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
            height: `1000px`,
          }}
        >
        */}
        
   
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
