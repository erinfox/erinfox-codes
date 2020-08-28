const path = require("path")

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/post.js`)
  return graphql(
    `
      {
        allContentfulBlogPost {
          edges {
            node {
              id
              slug
              title
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create blog posts pages.
    const posts = result.data.allContentfulBlogPost.edges

    posts.forEach(post => {
      const { slug, id } = post.node

      createPage({
        path: `/blog/${slug}`,
        component: blogPost,
        context: {
          id,
        },
      })
    })
  })
}
