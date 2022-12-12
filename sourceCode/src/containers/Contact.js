import React from 'react'

function Contact() {
  return (
    <div>
        <div className="breadcrumb-option">
    <center><br/><br/><br/><br/><br/><br/><br/></center> 
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="breadcrumb__links">
          <a href="./Home.js">
            <i className="fa fa-home" /> Home
          </a>
          <span>Contact</span>
        </div>
      </div>
    </div>
  </div>
</div>
<section className="contact spad">
  <div className="container">
    <div className="row">
      <div className="col-lg-4">
        <div className="contact__address">
          <div className="section-title">
            <h2>Contact info</h2>
          </div>
          <p>
          Feel free to contact us!
          </p>
          <ul>
            <li>
              <i className="fa fa-map-marker" />
              <h5>Address</h5>
              <p>Amman, Jordan</p>
            </li>
            <li>
              <i className="fa fa-phone" />
              <h5>Phone</h5>
              <span>962 775 352251</span>
              <span>962 796 66889</span>
            </li>
            <li>
              <i className="fa fa-envelope" />
              <h5>Email</h5>
              <p>Support@gmail.com</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-lg-8">
        <div className="contact__form">
          <div className="section-title">
            <h2>Get in touch</h2>
          </div>
          <p>
          Filling out this form will send your message directly to our team!{" "}
          </p>
          <form action="#">
            <div className="input__list">
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Email" />
              <input type="text" placeholder="Website" />
            </div>
            <textarea placeholder="Comment" defaultValue={""} />
            <button type="submit" className="site-btn">
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>

  )
}

export default Contact