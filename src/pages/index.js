import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Background from '../components/globals/Background'
import Info from '../components/home/Info'
import Menu from '../components/home/Menu'
// import Products from '../components/home/Products'
import Contact from '../components/home/Contact'

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    
    <Background img={data.img.childImageSharp.fluid} title="coffee shop" />
    <Info />
    <Menu items={data.menu} />
    {/* <Products /> */}
    <Contact />
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: {eq: "default-background.jpeg"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }

    menu: allContentfulCoffeeItem {
      nodes {
        id
        title
        price
        description {
          description
        }
        category
        image {
          fixed(height: 50, width: 50) {
            ...GatsbyContentfulFixed_tracedSVG
          }
        }
      }
    }
  }
`

export default IndexPage