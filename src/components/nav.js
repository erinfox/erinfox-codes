import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Nav = ({ siteTitle, menuLinks }) => (
  <nav className="text-3xl">
    <Link to="/"></Link>
    <ul>
      {menuLinks.map(link => (
        <li
          key={link.name}
          style={{
            listStyleType: `none`,
            paddingLeft: 12,
            paddingRight: 12,
          }}
        >
          <Link
            style={{ color: `black` }}
            className="focus:outline-none focus:shadow-outline"
            to={link.link}
          >
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
)

export default Nav
