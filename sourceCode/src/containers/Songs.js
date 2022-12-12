import React, { useEffect,useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setSongs } from "../redux/actions/productsActions";
import ProductComponent from "./ProductComponent";
import Pagination from "./Pagination";
import Page404 from "./Page404";
import Search from "./Search";



const Songs = () => {
  const songs = useSelector((state) => state.allsongs.songs);
  const search = useSelector((state) => state.search.search);
  const dispatch = useDispatch();

  const fetchSongs = async () => {
    const response = await axios
      .get("http://localhost/ApiReduxPro8/songs.php")
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(setSongs(response.data));
  };

  useEffect(() => {
    fetchSongs();
  }, []);

  console.log("Songs :", songs);

  const [currentPage, setCurrentPage] = useState(1);
  const [songsPerPage] = useState(16);

  // Get current blogs
  const indexOfLastsong = currentPage * songsPerPage;
  const indexOfFirstSongs = indexOfLastsong - songsPerPage;
  const currentBlogs = songs.slice(indexOfFirstSongs, indexOfLastsong);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);


  

  return (
<>
{sessionStorage.getItem("username")!== null?



<section className="discography spad">

<div className="breadcrumb-option">

  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="breadcrumb__links">
          <a href="./Home.js">
            <i className="fa fa-home" /> Home
          </a>
          <span>Songs</span>
        </div>
      </div>
    </div>
  </div>
</div>
<div className="container mt-5">
  <div className="row">
    <div className="col-lg-12">
      <div className="section-title center-title">
      
        <h2>Songs</h2>
        <h1>Name</h1>
        <Search/>
        
      </div>
    </div>
  </div>  </div>

<div class="container">
  
    <div className="col-12 mt-5" style={{ display: "flex",   justifyContent: "flexStart", flexDirection: "row",flexWrap: "wrap" }}>
  {/* <div classname="col-4"> */}

  <ProductComponent
  
          currentBlogs={currentBlogs}
          all={songs}
          search={search}
        />
</div>
</div>

{/* </div> */}


  <div class="col-lg-12 d-flex justify-content-center align-items-center">
                    <div class="pagination__links" >
                    {search == "" ? (
          <Pagination
            songsPerPage={songsPerPage}
            totalSongs={songs.length}
            paginate={paginate}
          />
        ) : null}
                    </div>
                </div>

</section>
:

    <Page404/>}






</>

  );
};

export default Songs;
