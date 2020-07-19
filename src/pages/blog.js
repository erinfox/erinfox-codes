import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

function Header() {
  return (
    <StaticQuery
      query={graphql`
        query BlogQuery {
          allContentfulBlogPost {
            nodes {
              title
              publishDate
              body {
                body
              }
            }
          }
        }
      `}
      render={data => (
        <header>
          <h1>{data.allContentfulBlogPost.nodes.title}</h1>
        </header>
      )}
    />
  )
}

const BlogPage = () => {
  // const data = useStaticQuery(graphql`
  // query allContentfulBlogPost {
  // nodes {
  //   title
  //   publishDate
  //   body {
  //     body
  //   }
  // }
  // }
  // `)
  return (
    <Layout>
      <SEO title="Blog" />
      <Header />
      {/* <p>{data.title}</p> */}
    </Layout>
  )
}

export default BlogPage
