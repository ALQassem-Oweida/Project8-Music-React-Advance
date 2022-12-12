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
  const [editedId,setId]=useState('')

  const editeComment=(id)=>{
    editIsClicked(true);
    setId(id)
    
  
  }
  




  
  return (
  


<>


<br />    <br />    <br />    <br />    <br />    <br />    <br />

<div className="container">
<AddBlog songId={songId} user_id={sessionStorage.getItem('id')} />
  <div className="row">
    <div className="col-md-6">
      <div className="post-content">


        <img src={song_image} alt="post-image" className="img-responsive post-image" />
        {post2.map((post)=>
        <>
        <div className="post-container">
          <img src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="user" className="profile-photo-md pull-left" />
          <div className="post-detail">
            <div className="user-info">
              <h5><a href="timeline.html" className="profile-link">{post.name}</a></h5>
              <p className="text-muted">Published on : {post.created_at}</p>
            </div>
           
            <div className="line-divider" />
            <div className="post-text">
              <p>{post.post_content}<i className="em em-anguished" /> <i className="em em-anguished" /> <i className="em em-anguished" /></p>
            </div>
            <div className="line-divider" />
            {comments.filter((el) => { return el.post_id==post.id;}).map((comment)=>
            <div className="post-comment">
           
              <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt className="profile-photo-sm" />
              
              <p><a href="timeline.html" className="profile-link">{comment.name} 
                <br/></a><i className="em em-laughing" />
        
                <span style={{color:'black',fontStyle:'none'}}> <label style={{fontSize:'10px'}}> {comment.created_at}</label></span><br/>
              {comment.comment_content}           
            
            <div>
              {sessionStorage.getItem('id')==comment.user_id ?<>
              <a type="submit" style={{border:"none",color:'red',marginRight:'12px'}} onClick={() => handleDel(comment.id)} >
              <i class="bi bi-trash-fill"></i>
              </a>

               <a type="submit"  style={{border:"none",color:'green'}} onClick={()=>editeComment(comment.id)} >
               <i class="bi bi-pencil-square"></i>
              </a></>
              
              
              :null}</div>
          
               </p>
              
            </div>
          

            )}

                      {edit==false?<Comment post_id={post.id} user_id={sessionStorage.getItem('id')}/>:
                      <CommentEdit id={editedId}/>
                      }

          </div>
        </div>
         </>)}
      </div>
     
    </div>


    <div className="col-md-6">


    {/* lyrics Section */}
    <div class="blog__details__quote">
      
      <p>{lyrics}</p>
      <h6>{singer}</h6>
      <i class="fa fa-quote-right"></i>
    </div>
    </div>



  </div>
</div>



</>


  )
}

export default Singlesong