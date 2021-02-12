import React from "react"
import { graphql, Link } from "gatsby"

const Home = ({ data }) => {
  return (
    <div>
      <div>
        <h1>{data.site.siteMetadata.title}</h1>
        <p>{data.site.siteMetadata.description}</p>
      </div>
      <div>
        {data.allMdx.nodes.map(({ id, excerpt, frontmatter, fields }) => (
          <div key={id}>
            <Link to={fields.slug}>
              <h1>{frontmatter.title}</h1>
            </Link>
            <p>{frontmatter.date}</p>
            <p>{excerpt}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home

export const query = graphql`
  query SITE_INDEX_QUERY {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      nodes {
        id
        excerpt(pruneLength: 250)
        frontmatter {
          title
          date
        }
        fields {
          slug
        }
      }
    }
  }
`
