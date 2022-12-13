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
  <img height={290} src="https://th.bing.com/th/id/OIP.6_demw97jFZ3z-BIb7yJTwHaEK?w=249&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" className="card-img-top" alt="..." />
  <div className="card-body">
  <h4>sia</h4>
    <p className="card-text"><i className="fa fa-map-marker" /> Germany, Berlin.</p>
    <span>Dec 27, 2022</span>
  </div>


</div>

<div className="card" style={{width: '18rem'}}>
  <img  height={290} src="https://th.bing.com/th/id/OIP.e7fNUb3RMogaUhr-3AlBngHaE_?w=263&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" className="card-img-top" alt="..." />
  <div className="card-body">
  <h4>rihanna</h4>
    <p className="card-text"><i className="fa fa-map-marker" />Jordan, Amman.</p>
    <span>Dec 26, 2022</span>
  </div>


</div>

<div className="card" style={{width: '18rem'}}>
  <img height={290} src="https://th.bing.com/th/id/OIP.vrUSU97b_iRadz9egUx5lwHaHa?w=196&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7" className="card-img-top" alt="..." />
  <div className="card-body">
  <h4>Eminem</h4>
    <p className="card-text"><i className="fa fa-map-marker" /> Jordan, Amman</p>
    <span>Dec 28, 2022</span>
  </div>


</div>

<div className="card" style={{width: '18rem'}}>
  <img height={290} src="https://th.bing.com/th/id/OIP.bn61oAJY_s7RqmLYworlMQHaE8?w=286&h=191&c=7&r=0&o=5&dpr=1.3&pid=1.7" className="card-img-top" alt="..." />
  <div className="card-body">
  <h4>Ace hood</h4>
    <p className="card-text"><i className="fa fa-map-marker" />England, london</p>
    <span>Dec 29, 2022</span>
  </div>


</div>



<div className="card" style={{width: '18rem'}}>
  <img height={290} src="https://th.bing.com/th/id/OIP.G_JalGl2t43eNGsDH9YA2AHaEv?w=282&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" className="card-img-top" alt="..." />
  <div className="card-body">
  <h4>post malone</h4>
    <p className="card-text"><i className="fa fa-map-marker" />Berlin, Germany</p>
    <span>Dec 30, 2022</span>
  </div>


</div>



<div className="card" style={{width: '18rem'}}>
  <img height={290} src="https://th.bing.com/th/id/OIP.CrRFTpmDcHGmSsyHFOQA3gHaEh?w=298&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7" className="card-img-top" alt="..." />
  <div className="card-body">
  <h4>Rag'n'Bone Man</h4>
    <p className="card-text"><i className="fa fa-map-marker" />madrid spain</p>
    <span>Dec 31, 2022</span>
  </div>


</div>
 




                    
                    </OwlCarousel>





   
  

      

     

                    </div>












</>





  )
}

export default ApiHomePage