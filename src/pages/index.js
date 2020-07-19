import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1 className="bg-red-300">Hi people</h1>
    <br />
  </Layout>
)

export default IndexPage
