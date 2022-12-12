import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../redux/actions/productsActions";
function Search() {

      // Searche
   const [inputText, setInputText] = useState("");
  const inputHandler = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };
  const dispatch = useDispatch();
  dispatch(setSearch(inputText));
  return (
  <>
    <div className="container mt-5">
        <div className="row">
          
          <div className="col d-flex justify-content-center align-items-center m-0">
            <div class="input-group rounded" style={{ width: "250px" }}>
              <input
                type="search"
                class="form-control rounded"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="search-addon"
                onChange={inputHandler}
                label="Search"
              />
            </div>
          </div>
        </div>
      </div>
  
  
  
  </>
  )
}

export default Search