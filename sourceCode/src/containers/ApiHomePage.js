import React from "react";
//Owl Carousel Libraries and Module
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import axios from "axios";

import { useEffect, useState } from "react";

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
      items: 4,
    },
  },
};

function ApiHomePage() {
  function randomize(values) {
    let index = values.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (index != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * index);
      index--;
  
      // And swap it with the current element.
      [values[index], values[randomIndex]] = [
        values[randomIndex], values[index]];
    }
  
    return values;
  }


  const [post, setPost] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost/ApiReduxPro8/home_api.php`)
      .then((res) => {
        console.log(res.data);
        setPost(res.data);
      })
      .catch((err) => {
        console.log("Err: ", err);
      });
  }, []);



  return (
    <>
      <div classname="row">
        <div classname="col-lg-12">
          <div classname="section-title">
            <center>
              <h2 className="mb-5">Upcoming Events</h2>
            </center>
          </div>
        </div>
      </div>
      <div className="row">
        {post.length !== 0 && (
          <OwlCarousel className="slider-items owl-carousel" {...options}>
            {randomize(post).map((song) => (
              <div
                className="card"
                style={{ width: "18rem" }}
                key={Math.floor(Math.random() * 5000)}
              >
                <img
                  src={song.img}
                  height={400}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h4>{song.singer}</h4>
                  <p className="card-text">
                    
                    {song.album}
                  </p>
                  <span></span>
                </div>
              </div>
            ))}

    
          </OwlCarousel>
        )}
      </div>
    </>
  );
}

export default ApiHomePage;
