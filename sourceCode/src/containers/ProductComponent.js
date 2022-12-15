import axios from "axios";
import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";

const ProductComponent = (props) => {

   const [Fav,setFav]=useState([]);



   const fetchFav = async () => {
    const response = await axios
      .get(`http://localhost/ApiReduxPro8/favorite.php/${sessionStorage.getItem('id')}`)
      .catch((err) => {
        console.log("Err: ", err);
      });
      setFav(response.data);
      console.log(response.data)
  };


  
  // const filterdFav=Fav.filter((el) => {return el.id==id})
  console.log("filterdFav")
  // console.log(filterdFav)
  console.log(Fav.filter((el) => {return el.song_name=='Send Me An Angel'}).length)

  
useEffect(() => {
fetchFav();


}, []);

  
  const addToFav=(song_id,user_id)=>{
  //  console.log(song_id)
  //  console.log('test')
  //  console.log(user_id)
    // setInputs((values) => ({song_id:song_id,user_id:user_id}));
    axios.post('http://localhost/ApiReduxPro8/favorite.php',{song_id:song_id,user_id:user_id})
    .then((res) => {
      fetchFav(); 
    })
   
  }

  const handleDel = (favid) => {
   
    axios
      .delete(`http://localhost/ApiReduxPro8/favorite2.php/${favid}/delete`)
      .then(function (response) {
        fetchFav(); 
      });
     
  };
 
  if (props.search == "") {


    
    const renderList = props.currentBlogs.map((song) => {
      const { id, song_name,singer,album,genre, song_image, lyrics,description } = song;

   

      return (
     
 
   <>
  

<div className="card" style={{ width: "18rem",margin:"40px" }}>
<div>
{sessionStorage.getItem("username")!== null?


<>
{Fav.filter((el) => {return el.song_name==song_name}).length==0?
       <a className="LikeButton" type="submit"  onClick={()=>addToFav(id,sessionStorage.getItem('id'))}><i style={{color:"white",fill:'white'}} className="bi bi-heart-fill fa-lg"></i></a>
     : <a className="LikeButton" type="submit"  onClick={()=>handleDel(id)}><i style={{color:"red",fill:'white'}} className="bi bi-heart-fill fa-lg"></i></a> }
  </>          
            
            :null} 
<Link  to={`/song/${id}`}>

  <img className="card-img-top" src={song_image} alt={song_name} /></Link></div>
  <div className="card-body">
  <div class="row">
    <div class="col text-center">
    <h3  style={{ color:"#755e92" }}className="card-title ">{song_name}</h3>
    </div>
  </div>
    

  </div>
</div>
                
    

   </>
  

    
  
      );
    });
    return <>{renderList}</>;
  } else {
    const filteredData = props.all.filter((el) => {
      return el.song_name.toLowerCase().includes(props.search);
    });

    const renderList = filteredData.map((song) => {
      const { id, song_name,singer,album,genre, song_image, lyrics,description } = song;

      return (
             
  
        <Link  to={`/${id}`}>
        <div className="card" style={{ width: "18rem",margin:"40px" }}>
          <img className="card-img-top" src={song_image} alt={song_name} />
          <div className="card-body">
          <div class="row">
            <div class="col text-center">
            <h3  style={{ color:"#755e92" }}className="card-title ">{song_name}</h3>
            </div>
          </div>
            
            <div class="row">
            <div class="col text-center">
            {sessionStorage.getItem("username")!== null?
            <button type="submit" class="btn btn-dark" onClick={()=>addToFav(id,sessionStorage.getItem('id'))}><i class="bi bi-heart"></i></button>:null}
            </div>
          </div>
           
           
            
          </div>
        </div>
        </Link>
 

      );
    });
    return <>{renderList}</>;
  }
};

export default ProductComponent;
