import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedProduct,setPosts} from "../redux/actions/productsActions";

import AddBlog from "./AddBlog";
import Comment from "./Comment";
import CommentEdit from "./CommentEdit";





function Singlesong() {


  const { songId } = useParams();
  let product = useSelector((state) => state.product);
  const { id, song_name,singer,album,genre, song_image, lyrics,description } = product;

  let posts = useSelector((state) => state.posts);
  
const [post2,setPost2]=useState([]);
const [comments,setComment]=useState([]);

  const dispatch = useDispatch();
  const fetchProductDetail = async (songId) => {
    const response = await axios
      .get(`http://localhost/ApiReduxPro8/songs.php/${songId}`)
      .catch((err) => {
        console.log("Err: ", err);
      });

      const postresponse = await axios
      .get(`http://localhost/ApiReduxPro8/posts.php/${songId}`)
      .catch((err) => {
        console.log("Err: ", err);
      });

      const commentsresponse = await axios
      .get(`http://localhost/ApiReduxPro8/comments.php`)
      .catch((err) => {
        console.log("Err: ", err);
      });
      setPost2(postresponse.data);
      setComment(commentsresponse.data);
    dispatch(selectedProduct(response.data));
    // dispatch(setPosts(postresponse.data));
  };

  useEffect(() => {
    fetchProductDetail(songId);

   
  }, [songId]);


  //Delete
  const handleDel = (id) => {
   
    axios
      .delete(`http://localhost/ApiReduxPro8/comments.php/${id}/delete`)
      .then(function (response) {
        fetchProductDetail(songId);
      });
     
  };


  const [edit,editIsClicked]=useState(false);
  const [editedId,setId]=useState('');
  const [editedpost_id,setPostId]=useState('');

  const editeComment=(id,post_id)=>{
    editIsClicked(true);
    setId(id);
    setPostId(post_id);
    
  
  }
  




  
  return (
  


<>


<br />    <br />    <br />    <br />    <br />    <br />    <br />
<div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="breadcrumb__links">
          <a href="./Home.js">
            <i className="fa fa-home" /> Home
          </a>
          <span>{song_name} Song</span>
        </div>
      </div>
    </div>
  </div>

  <div className="container mt-5">
  <div className="row">
    <div className="col-lg-12">
      <div className="section-title center-title">
      
        <h2>{song_name}</h2>
        <h1>Lyrics</h1>
        
      </div>
    </div>
  </div>  </div>
  <br />    <br />    <br />    <br />    <br />    <br />    <br />
<div className="container">

  <div className="row">
    
    <div className="col-md-6">
      
      <div className="post-content bg-white border border-white">


        <img src={song_image} alt="post-image" className="img-responsive post-image" />
        
        
       
         <div className="container mt-5">
  <div className="row">
    <div className="col-lg-12">
      <div className="section-title center-title">
      
        <h2>Posts</h2>
     
       <h5>Share your opinion and write your post</h5>
        
      
       
        
      </div>
    </div>
  </div>  </div>
  {post2.map((post)=>
   <>
        <div className="post-container border mb-5 ">
          
          <img src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="user" className="profile-photo-md pull-left" />
          <div className="post-detail">
            <div className="user-info">
            <p className="text-muted" style={{color:'#755e92',fontSize:'10px'}}>Published on : {post.created_at}</p>
              <h5 style={{color:'#755e92',fontWeight:"bold"}}>{post.name}</h5>
              
            </div>
           
            <div className="line-divider" />
            <div className="post-text">
              <p>{post.post_content}<i className="em em-anguished" /> <i className="em em-anguished" /> <i className="em em-anguished" /></p>
            </div>
            <div className="line-divider" />
          
            {comments.filter((el) => { return el.post_id==post.id;}).map((comment)=>
            <div className="post-comment">
           
              <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt className="profile-photo-sm" />
              
              <p 
               > <span style={{color:'#755e92',fontWeight:"bold"}}>{comment.name} </span>
               
        
                <span style={{color:'black',fontStyle:'none'}}> <label style={{fontSize:'10px'}}> {comment.created_at}</label></span><br/>
              {comment.comment_content}           
            
            <div>
              {sessionStorage.getItem('id')==comment.user_id ?<>
              <a type="submit" style={{border:"none",color:'red',fontSize:'12px'}} onClick={() => handleDel(comment.id)} >
             delete 
              </a><span style={{marginRight:'10px',marginLeft:'10px'}}>|</span>

               <a type="submit"  style={{border:"none",color:'green',fontSize:'12px'}} onClick={()=>editeComment(comment.id,comment.post_id)} >
                   edit
              </a></>
              
              
              :null}</div>
          
               </p>
               
      
            </div>
         
            )}

                      {edit==false?<Comment post_id={post.id} user_id={sessionStorage.getItem('id')}/>:null}
                      {edit==true? <CommentEdit id={editedId}/>:null}
                     
                      

          </div>
        </div>
        
         </>)}
         
      </div>
      
      <AddBlog songId={songId} user_id={sessionStorage.getItem('id')} />
    </div>


    <div className="col-md-6">


    {/* lyrics Section */}
    <div class="blog__details__quote">
    <div className="container mt-5">
  <div className="row">
    <div className="col-lg-12">
      <div className="section-title center-title">
      
        <h2> Lyrics </h2>
        
        
      </div>
    </div>
  </div>  </div>
      <p>{lyrics}</p>
      <br></br>
      <h6> {singer} </h6>
      <p style={{color:'#5c00ce' ,fontSize:"15px",marginTop:'10px'}}> Album: {album}</p>
      <p style={{color:'#5c00ce' ,fontSize:"15px"}}> Genre: {genre}</p>
      <i class="fa fa-quote-right"></i>
    </div>
    </div>



  </div>
  
</div>



</>


  )
}

export default Singlesong