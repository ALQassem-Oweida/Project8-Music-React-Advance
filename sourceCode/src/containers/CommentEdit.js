import axios from "axios";
import React, { useState } from "react";

function CommentEdit(props) {

const [inputs,setInputs]=useState([]);
const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value,id:props.id}));
  };

const commentSubmeit=(e)=>{
    e.preventDefault();
    axios
      .put("http://localhost/ApiReduxPro8/comments.php", inputs)
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
        placeholder="Edit Comment"
        onChange={handleChange}
      />

    </form>
    </>
  );
}

export default CommentEdit;
