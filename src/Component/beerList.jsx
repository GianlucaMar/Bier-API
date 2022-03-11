import React, {useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav"
import Back from "../Back.png"


const BeerList = () => {
    const [api, setApi] = useState([])
    useEffect(() => {
        fetch("https://ih-beers-api2.herokuapp.com/beers")
    .then(response => response.json())
    .then(json => {
        console.log(json)
        setApi(json)
    })
    }, [])
    

    return(
    <div>
      {api.map((item, i) => {
        return (
            <div className="flex" key={i}>
                
                <img className="bottleimg" src={item.image_url} alt="" />
                <div className="divflex">
                    <p className="bottlename">{item.name}</p>
                    <p className="bottlecol">{item.tagline}</p>
                    <p className="creat">Created by: {item.name}</p>
                    <Link className="but" to={`/Details/${item._id}`}>Details</Link>
                </div>
            </div>
        );
      })}
      <Link to="/"><img src={Back} alt="" /></Link>
      <Nav />
    </div>
    
)
}
export default BeerList

