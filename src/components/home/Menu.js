import React, { useState } from 'react'
import Img from 'gatsby-image'

import Title from '../globals/Title'

const getCategories = items => ['all', ...new Set(items.map(item => item.category))]

const Menu = ({ items }) => {
  const [itemList, setItemList] = useState(items.nodes);
  const [coffeeItems, setCoffeeItems] = useState(items.nodes);
  const [categories, setCategories] = useState(getCategories(items.nodes));

  const handleItems = category => {
    let tempItems = [...itemList];
    if (category === 'all') {
      setCoffeeItems(tempItems)
    }
    else {
      let otherCategories = tempItems.filter(item => item.category === category);
      setCoffeeItems(otherCategories);
    }
  }

  if (itemList.length > 0) {
    return (
      <section className="menu py-5">
        <div className="container">
          <Title title="best of our menu" />
          {/* categories */}
          <div className="row mb-5">
            <div className="col-10 mx-auto text-center">
              {
                categories.map((category, index) => (
                  <button
                    type="button"
                    key={index}
                    className="btn btn-yellow text-capitalize m-3"
                    onClick={() => handleItems(category)}
                  >
                    {category}
                  </button>
                ))
              }
            </div>
          </div>

          {/* items */}
          <div className="row">
            {
              coffeeItems.map(item => (
                <div
                  key={item.id}
                  className="col-11 col-md-6 my-3 d-flex mx-auto"
                >
                  <div>
                    <Img fixed={item.image.fixed} />
                  </div>
                  <div className="flex-grow-1 px-3">
                    <div className="d-flex justify-content-between">
                      <h6 className="mb-0"><small>{item.title}</small></h6>
                      <h6 className="mb-0 text-yellow"><small>${item.price}</small></h6>
                    </div>
                    <p className="text-muted">
                      <small>
                        {item.description.description}
                      </small>
                    </p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </section>
    )
  }
  else {
    return (
      <section className="menu py-5">
        <div className="container">
          <Title title="best of our menu" />
          <div className="row">
            <div className="col-10 col-sm-6 mx-auto text-center text-capitalize">
              <h1>There are no itemes to display</h1>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Menu