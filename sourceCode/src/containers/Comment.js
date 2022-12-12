import axios from "axios";
import React, { useState } from "react";

function Comment(props) {

const [inputs,setInputs]=useState([]);
const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value,post_id:props.post_id,user_id:props.user_id }));
  };

const commentSubmeit=(e)=>{
    e.preventDefault();
    axios
      .post("http://localhost/ApiReduxPro8/comments.php", inputs)
      .then(function (response) {
        console.log(response.data);
      });
    setInputs("");
    window.location.reload(false);
}


  return (
    <>
    <form onSubmit={commentSubmeit} className="post-comment">
      <img
        src="https://bootdey.com/img/Content/avatar/avatar1.png"
        alt
        className="profile-photo-sm"
      />
      <input
      name="comment_content"
        type="text"
        className="form-control"
        placeholder="Post a comment"
        onChange={handleChange}
      />

    </form>
    </>
  );
}

export default Comment;
