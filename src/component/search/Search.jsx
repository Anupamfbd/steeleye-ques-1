import { useState } from "react";


const Search = ({ searchdata }) => {

  const [searchText, setSearchText] = useState("");
   
    let filteredOrderIds = searchdata.filter((orderId) => 
      orderId["&id"].includes(searchText.toUpperCase())
    );
  
  
  return (
    <div className="divsearch">
    <input type="text" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
    <ul style={{listStyleType:'none'}}>
        {(searchText !== "") ? (<>{filteredOrderIds.map((orderId) => (
          <li>{orderId["&id"]}</li>
        ))}</>) : ("")
        }
    </ul>
    </div>
  );
}

export default Search
