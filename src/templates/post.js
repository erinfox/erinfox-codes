import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const BlogPageTemplate = ({ data }) => {
  const {
    title,
    body: { json },
  } = data.contentfulBlogPost
  return (
    <>
      <h1>{title}</h1>
      <section id="post-content">{documentToReactComponents(json)}</section>
    </>
  )
}

export default BlogPageTemplate

export const query = graphql`
  query($id: String!) {
    contentfulBlogPost(id: { eq: $id }) {
      id
      slug
      title
      body {
        json
      }
    }
  }
`
