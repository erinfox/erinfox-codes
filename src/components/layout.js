import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Nav from "./nav"
import { Link } from "gatsby"
import { FaGithub, FaTwitter, FaLinkedinIn } from "react-icons/fa"

import "./layout.css"

const Layout = ({ children }) => {
  const [isExpanded, toggleExpansion] = useState(false)
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
  const BREAKPOINT = 640
  const width = window.location

  return (
    <div className="mx-8 h-screen">
      <div className="text-3xl font-semibold flex justify-center md:justify-end mx-10 my-10">
        <Link className="md:fixed absolute top-0 md:mt-8 sm:insert-x-0 " to="/">
          ERIN FOX
        </Link>
        <div className=" lg:hidden pl-2 absolute top-0 right-0 mr-2 mt-2">
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
        <nav className="flex items-center flex-wrap">
          <div
            className={`${isExpanded ? `block` : `hidden`} w-full flex-grow `}
          >
            <div className="text-sm flex flex-col items-center justify-center">
              <Link to={`/`} href="#responsive-header">
                HOME
              </Link>
              <Link to={`/about`} className="mt-4 ">
                ABOUT
              </Link>
              <Link to={`/blog`} className="mt-4 ">
                BLOG
              </Link>
              <Link to={`/contact`} className="mt-4 ">
                CONTACT
              </Link>
            </div>
          </div>
          <main>{children}</main>
        </nav>
      ) : (
        <div className="flex h-screen">
          <div className="pr-16 fixed">
            <Nav
              menuLinks={data.site.siteMetadata.menuLinks}
              siteTitle={data.site.siteMetadata.title}
            />
          </div>
          <main>{children}</main>
        </div>
      )}
      <div className="fixed bottom-0 right-0 flex flex-row md:pr-16 md:pb-8">
        <Link to={`https://github.com/erinfox`}>
          <FaGithub
            style={{ height: "40", width: "40", paddingRight: "10px" }}
          />
        </Link>
        <Link to={`https://twitter.com/erinfoox`}>
          <FaTwitter
            style={{ height: "40", width: "40", paddingRight: "10px" }}
          />
        </Link>
        <Link to={`https://www.linkedin.com/in/erinkfox/`}>
          <FaLinkedinIn
            style={{ height: "40", width: "40", paddingRight: "10px" }}
          />
        </Link>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
