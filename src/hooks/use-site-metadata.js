import { useStaticQuery, graphql } from "gatsby"
export const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query MyQuery {
        site {
          siteMetadata {
            title
            description
            author{
              name
            }
            favicon
            logo
            social{
              service
              url
              fa
            }
            footer{
              text
              logo
            }
            address{
              line1
              line2
              line3
            }
            contacts {
              text
              url
            }
          }
        }
      }
    `
  )
  return site.siteMetadata
}
