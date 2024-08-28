import React from "react";
import Form from "react-bootstrap/Form";
const Search=({handleChange})=>{
    return(
        
            <Form.Control className="arama"
               placeholder="Search Player"
               type="search"
               onChange={handleChange}/>
          
    )
};
export default Search;