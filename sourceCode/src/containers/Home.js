import React from 'react'
import { Link } from 'react-router-dom'
import ApiHomePage from './ApiHomePage'

function Home() {
  return (
    <>
        


   {/* Hero Section Begin */}
<section className="hero spad set-bg">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="hero__text">
          <span>New single</span>
          <h1>Feel the heart beats</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br />tempor
            incididunt ut labore et dolore magna aliqua.</p>
          <a href="https://www.youtube.com/watch?v=K4DyBUG242c" className="play-btn video-popup"><i className="fa fa-play" /></a>
        </div>
      </div>
    </div>
  </div>
  <div className="linear__icon">
    <i className="fa fa-angle-double-down" />
  </div>
</section>
{/* Hero Section End */}


{/* Api Home Slider  */}
<section class="event spad">
        <div class="container">

<ApiHomePage/>
</div>
</section>
{/* Api Home Slider  */}



{/* About Section Begin */}
<section className="about spad">
  <div className="container">
    <div className="row">
      <div className="col-lg-6">
        <div className="about__pic">
          <img src="img/about/about.png" alt />
        </div>
      </div>
      <div className="col-lg-6">
        <div className="about__text">
          <div className="section-title">
            <h2>DJ Alexandra Rud</h2>
            <h1>About me</h1>
          </div>
          <p>DJ Rainflow knows how to move your mind, body and soul by delivering tracks that stand out
            from the norm. As if this impressive succession of high impact, floor-filling bombs wasn’t
            enough to sustain.</p>
          <Link to='/contact' className="primary-btn">CONTACT ME</Link>
        </div>
      </div>
    </div>
  </div>
</section>
{/* About Section End */}



{/* Services Section Begin */}
<section className="services">
  <div className="container-fluid">
    <div className="row">
      <div className="col-lg-6 p-0">
        <div className="services__left set-bg" style={{backgroundImage:"url(img/services/service-left.jpg)"}}>
          <a href="https://www.youtube.com/watch?v=JGwWNGJdvx8" className="play-btn video-popup"><i className="fa fa-play" /></a>
        </div>
      </div>
      <div className="col-lg-6 p-0">
        <div className="row services__list">
          <div className="col-lg-6 p-0 order-lg-1 col-md-6 order-md-1">
            <div className="service__item deep-bg">
              <img src="img/services/service-1.png" alt />
              <h4>Wedding</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
            </div>
          </div>
          <div className="col-lg-6 p-0 order-lg-2 col-md-6 order-md-2">
            <div className="service__item">
              <img src="img/services/service-2.png" alt />
              <h4>Clubs and bar</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
            </div>
          </div>
          <div className="col-lg-6 p-0 order-lg-4 col-md-6 order-md-4">
            <div className="service__item deep-bg">
              <img src="img/services/service-4.png" alt />
              <h4>DJ lessons</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
            </div>
          </div>
          <div className="col-lg-6 p-0 order-lg-3 col-md-6 order-md-3">
            <div className="service__item">
              <img src="img/services/service-3.png" alt />
              <h4>Corporate events</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
{/* Services Section End */}










    </>
  )
}

export default Home