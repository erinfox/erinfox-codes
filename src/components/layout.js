import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Nav from "./nav"
import { Link } from "gatsby"
import useScreenDimensions from "../hooks/screen-width"

import "./layout.css"

const BREAKPOINT = 640

const Layout = ({ children }) => {
  const [isExpanded, toggleExpansion] = useState(false)
  const { width } = useScreenDimensions()
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
    <div className="mx-12 h-screen">
      <div className="text-3xl font-semibold flex justify-end mx-10 my-10">
        <Link to="/">ERIN FOX</Link>
        <div className="block lg:hidden pl-2 self-center">
          <button
            onClick={() => toggleExpansion(!isExpanded)}
            className="flex items-center px-3 py-2 border rounded"
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
      </div>
      {width < BREAKPOINT ? (
        <nav className="flex items-center justify-between flex-wrap">
          <div
            className={`${
              isExpanded ? `block` : `hidden`
            } w-full block flex-grow lg:flex lg:items-center lg:w-auto`}
          >
            <div className="text-sm lg:flex-grow">
              <Link
                to={`/`}
                href="#responsive-header"
                className="block mt-4 lg:inline-block lg:mt-0 mr-4 "
              >
                HOME
              </Link>
              <Link
                to={`/about`}
                className="block mt-4 lg:inline-block lg:mt-0 mr-4"
              >
                ABOUT
              </Link>
              <Link to={`/blog`} className="block mt-4 lg:inline-block lg:mt-0">
                BLOG
              </Link>
              <Link
                to={`/contact`}
                className="block mt-4 lg:inline-block lg:mt-0"
              >
                CONTACT
              </Link>
            </div>
          </div>
        </nav>
      ) : (
        <div className="container flex h-screen">
          <div className="flex flex-row pr-16">
            <Nav
              menuLinks={data.site.siteMetadata.menuLinks}
              siteTitle={data.site.siteMetadata.title}
            />
          </div>
          <main>{children}</main>
          {/* <footer className="'w-full text-center p-4 pin-b'">
          social icon links fixed to bottom right corner
        </footer> */}
        </div>
      )}
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
