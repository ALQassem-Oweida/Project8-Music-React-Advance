import React from 'react'
//Owl Carousel Libraries and Module
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

//Owl Carousel Settings
const options = {
    margin: 30,
    responsiveClass: true,
    nav: true,
    autoplay: true,
    // navText: ["Prev", "Next"],
    smartSpeed: 1000,
    responsive: {
        0: {
            items: 1,
        },
        400: {
            items: 1,
        },
        600: {
            items: 2,
        },
        700: {
            items: 3,
        },
        1000: {
            items:4,
        }
    },
  };

function ApiHomePage() {

  return (



 <>
    <div classname="row">
      <div classname="col-lg-12">
        <div classname="section-title">
          <center><h2 className='mb-5'>Upcoming Events</h2></center>
        </div>
      </div>
    </div>
    <div className="row">
  



    <OwlCarousel className="slider-items owl-carousel" {...options}>
                        
           
  <div className="card" style={{width: '18rem'}}>
  <img src="img/events/event-2.jpg" className="card-img-top" alt="..." />
  <div className="card-body">
  <h4>David Guetta Miami Ultra</h4>
    <p className="card-text"><i className="fa fa-map-marker" /> Funkhaus Berlin, Berlin, Germany</p>
    <span>Dec 15, 2019</span>
  </div>


</div>

<div className="card" style={{width: '18rem'}}>
  <img src="img/events/event-1.jpg" className="card-img-top" alt="..." />
  <div className="card-body">
  <h4>David Guetta Miami Ultra</h4>
    <p className="card-text"><i className="fa fa-map-marker" /> Funkhaus Berlin, Berlin, Germany</p>
    <span>Dec 15, 2019</span>
  </div>


</div>

<div className="card" style={{width: '18rem'}}>
  <img src="img/events/event-2.jpg" className="card-img-top" alt="..." />
  <div className="card-body">
  <h4>David Guetta Miami Ultra</h4>
    <p className="card-text"><i className="fa fa-map-marker" /> Funkhaus Berlin, Berlin, Germany</p>
    <span>Dec 15, 2019</span>
  </div>


</div>

<div className="card" style={{width: '18rem'}}>
  <img src="img/events/event-1.jpg" className="card-img-top" alt="..." />
  <div className="card-body">
  <h4>David Guetta Miami Ultra</h4>
    <p className="card-text"><i className="fa fa-map-marker" /> Funkhaus Berlin, Berlin, Germany</p>
    <span>Dec 15, 2019</span>
  </div>


</div>



<div className="card" style={{width: '18rem'}}>
  <img src="img/events/event-2.jpg" className="card-img-top" alt="..." />
  <div className="card-body">
  <h4>David Guetta Miami Ultra</h4>
    <p className="card-text"><i className="fa fa-map-marker" /> Funkhaus Berlin, Berlin, Germany</p>
    <span>Dec 15, 2019</span>
  </div>


</div>



<div className="card" style={{width: '18rem'}}>
  <img src="img/events/event-1.jpg" className="card-img-top" alt="..." />
  <div className="card-body">
  <h4>David Guetta Miami Ultra</h4>
    <p className="card-text"><i className="fa fa-map-marker" /> Funkhaus Berlin, Berlin, Germany</p>
    <span>Dec 15, 2019</span>
  </div>


</div>
 
  <div className="card" style={{width: '18rem'}}>
  <img src="img/events/event-2.jpg" className="card-img-top" alt="..." />
  <div className="card-body">
  <h4>David Guetta Miami Ultra</h4>
    <p className="card-text"><i className="fa fa-map-marker" /> Funkhaus Berlin, Berlin, Germany</p>
    <span>Dec 15, 2019</span>
  </div>


</div>




                    
                    </OwlCarousel>





   
  

      

     

                    </div>












</>





  )
}

export default ApiHomePage