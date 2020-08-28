import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Blog" />
      <h1>Hey</h1>
    </Layout>
  )
}

export default BlogPage

// export const pageQuery = graphql`
//   query($title: String!) {
//     contentfulBlogPost(title: { eq: $title }) {
//       title
//       id
//       content {
//         childMarkdownRemark {
//           html
//         }
//       }
//     }
//   }
// `
