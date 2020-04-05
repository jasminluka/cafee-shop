import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Product from './Product'
import Title from '../globals/Title'

const getProducts = graphql`
  {
    products: allContentfulCoffeeProduct {
      nodes {
        price
        title
        id
        image {
          fluid(maxHeight: 426) {
            src
            # ...GatsbyContentfulFluid_tracedSVG
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`

const Products = () => {
  return (
    <StaticQuery query={getProducts} render={data => {
      return (
        <section className="py-5">
          <div className="container">
            <Title title="our products" />
            <div className="row">
              {
                data.products.nodes.map(product => (
                  <Product key={product.id} product={product} />
                ))
              }
            </div>
          </div>
        </section>
      )
    }} />
  )
}

export default Products