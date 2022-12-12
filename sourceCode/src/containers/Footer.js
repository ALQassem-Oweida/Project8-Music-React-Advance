import React from 'react'
import { Link } from "react-router-dom";

function Footer() {
  return (
   
<>
<section class="countdown spad set-bg" ></section>
{/* Footer Section Begin */}
<footer className="footer spad set-bg" style={{backgroundImage:"url(img/footer-bg.png)"}}>
  <div className="container">
    <div className="row">
      <div className="col-lg-3 col-md-6">
        <div className="footer__address">
          <ul>
            <li>
              <i className="fa fa-phone" />
              <p>Phone</p>
              <h6>962 775 352251</h6>
            </li>
            <li>
              <i className="fa fa-envelope" />
              <p>Email</p>
              <h6>Support@gmail.com</h6>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-lg-4 offset-lg-1 col-md-6">
        <div className="footer__social">
          <h2>Noisy Notes</h2>
          <div className="footer__social__links">
            <a href="https://www.facebook.com/majd.atyyat.3"><i className="fa fa-facebook" /></a>
            <a href="https://twitter.com/majd_atyyat"><i className="fa fa-twitter" /></a>
            <a href="https://www.instagram.com/majdatyyat/"><i className="fa fa-instagram" /></a>
           
          </div>
        </div>
      </div>
      <div className="col-lg-3 offset-lg-1 col-md-6">
        <div className="footer__newslatter">
          <h4>Contact</h4>
          <form action="#">
            <input type="text" placeholder="Email" />
            <Link  to ="contact">
  <button className="GFG"><i className="fa fa-send-o" /></button>
</Link>
            
          </form>
        </div>
      </div>
    </div>
    {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
    <div className="footer__copyright__text">
    <p>Copyright ©  All rights reserved |made with <i className="fa fa-heart" aria-hidden="true" /> </p>
    </div>
    {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
  </div>
</footer>
{/* Footer Section End */}






</>

  )
}

export default Footer