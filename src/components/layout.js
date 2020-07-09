/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Nav from "./nav"

import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
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
  `)

  return (
    <div className="container">
      <div
        className="flex w-full"
        style={{
          margin: `0 auto`,
          maxWidth: 1700,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <div className="flex flex-row">
          <Nav
            menuLinks={data.site.siteMetadata.menuLinks}
            siteTitle={data.site.siteMetadata.title}
          />
          <main>{children}</main>
        </div>
        {/* <footer className="'w-full text-center p-4 pin-b'">
          social icon links fixed to bottom right corner
        </footer> */}
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
