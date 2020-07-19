import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <div className="px-32 py-16">
      <p>
        Erin Fox is an international speaker who has found a home in the React
        Community. Whether it’s building out projects in React or React Native,
        she enjoys a good Flexbox challenge and finding different UI solutions.
        She’s passionate about explaining things simply and cats. She lives in
        the Bay Area, California.
      </p>
    </div>
  </Layout>
)

export default AboutPage
