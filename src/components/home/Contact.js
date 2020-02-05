import React from 'react'

import Title from '../globals/Title'

const Contact = () => {
  return (
    <section className="contact py-5">
      <Title title="contact us" />
      <div className="row">
        <div className="col-10 col-sm-8 col-md-6 mx-auto">
          <form action="https://formspree.io/jluka14@epoka.edu.al" method="POST">
            {/* name */}
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" className="form-control" placeholder="Jasmin Luka" />
            </div>
            {/* email */}
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" className="form-control" placeholder="email@email.com" />
            </div>
            {/* description */}
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea name="description" id="description" className="form-control" rows="5" placeholder="your description...."></textarea>
            </div>
            {/* submit */}
            <button type="submit" className="btn btn-yellow btn-block text-capitalize mt-5">
              Submit 
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact