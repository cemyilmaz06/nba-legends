import React, { useState } from "react";
import Search from "./Search"
import {data} from "../helper/data"
import PlayerCard from "./PlayerCrad";




const CardContainer=()=>{
    const [search, setSearch] = useState("");
        const handleChange=(e)=>{
            setSearch(e.target.value)
        }

    return(
        <div className="container">
<Search handleChange={handleChange} />
<div className="cardContainer">
    {data.filter((item)=>item.name.toLowerCase().includes(search.toLowerCase().trim()))
    .map((player)=>(
        <div>
            <PlayerCard {...player} />
        </div>
    ))}
</div>


        </div>
        
    )
}
export default CardContainer;