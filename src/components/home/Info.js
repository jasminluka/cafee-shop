import React from 'react'
import { Link } from 'gatsby'

import Title from '../globals/Title'

const Info = () => {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="our story" />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil praesentium commodi quibusdam magnam, labore ad repellendus delectus vitae reiciendis eius dolorem laboriosam nobis assumenda? Veritatis sunt placeat eveniet. Deleniti reiciendis assumenda temporibus voluptatem quia, sint ut, incidunt quod nulla enim voluptates ratione rem debitis alias, ipsum doloremque. Esse, cumque voluptatum!
            </p>
            <Link to="/about">
              <button className="btn btn-yellow text-uppercase">about</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Info