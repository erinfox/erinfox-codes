import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <div className="mt-2 mx-2 md:mt-16 md:mx-64">
      Erin Fox is an international speaker who has found a home in the React
      Community. Whether it’s building out projects in React or React Native,
      she enjoys a good Flexbox challenge and finding different UI solutions.
      She’s passionate about explaining things simply and cats. She lives in the
      Bay Area, California.
    </div>
  </Layout>
)

export default AboutPage
