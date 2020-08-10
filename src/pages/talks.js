import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const TalkPage = () => (
  <Layout>
    <SEO title="Talks" />
    <div className="flex flex-col mx-24 items-center justify-center">
      <div className="border rounded-full p-4 m-12">2020</div>
      <div className="border rounded-full p-4 m-12">2019</div>
      <div className="border rounded-full p-4 m-12">2018</div>
    </div>
  </Layout>
)

export default TalkPage
