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
         
          <h1>Feel the heart beats</h1>
          <p>Music Is Food For The Soul And The Brain
Jamming to your favorite song not only lifts your spirits, but it also helps <br></br> uniquely exercise the brain.</p>
          <a href="https://www.youtube.com/watch?v=K4DyBUG242c" className="play-btn video-popup" target="_blank"><i className="fa fa-play" /></a>
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
            <h2>Noisy Notes</h2>
            <h1>About</h1>
          </div>
          <p>      It's a place where all searches end!

We have a large, legal, every day growing universe of lyrics where stars of all genres and ages shine.</p>
          <Link to='/contact' className="primary-btn">CONTACT US</Link>
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
          <a href="https://www.youtube.com/watch?v=JGwWNGJdvx8" className="play-btn video-popup" target="_blank"><i className="fa fa-play" /></a>
        </div>
      </div>
      <div className="col-lg-6 p-0">
        <div className="row services__list">
          <div className="col-lg-6 p-0 order-lg-1 col-md-6 order-md-1">
            <div className="service__item deep-bg">
              <img src="img/services/service-1.png" alt />
              <h4>Mirrors by Justin Timberlake</h4>
              <p>"And I can't help but stare, cause I see truth somewhere in your eyes." </p>
            </div>
          </div>
          <div className="col-lg-6 p-0 order-lg-2 col-md-6 order-md-2">
            <div className="service__item">
              <img src="img/services/service-2.png" alt />
              <h4>Light Up by Drake</h4>
              <p> "Let's celebrate with a toast and get lost in tonight."</p>
            </div>
          </div>
          <div className="col-lg-6 p-0 order-lg-4 col-md-6 order-md-4">
            <div className="service__item deep-bg">
              <img src="img/services/service-4.png" alt />
              <h4>Jadakiss</h4>
              <p>"Put Your Hands Up"</p>
            </div>
          </div>
          <div className="col-lg-6 p-0 order-lg-3 col-md-6 order-md-3">
            <div className="service__item">
              <img src="img/services/service-3.png" alt />
              <h4>That's Amore by Dean Martin</h4>
              <p>"When the moon hits your eye like a big pizza pie, that's amore"</p>
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