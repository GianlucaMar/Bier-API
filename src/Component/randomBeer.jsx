import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import Nav from "./Nav"
import Back from "../Back.png"


const RandomBier = () => {

        const[RandomBeer, setRandomBeer] = useState([])

    useEffect(() => {
        fetch(`https://ih-beers-api2.herokuapp.com/beers/random`)
        .then(response => response.json())
        .then(json => {
            console.log(json)
            setRandomBeer(json)
        })
    }, [])

    return(
        <div>
            <div className="debottleimg">
            <img className="debottleimg" src={RandomBeer.image_url} alt="" />
            </div>
            <div className="margin">
            <p className="biername">{RandomBeer.name}</p>
            <p className="debottlecol">{RandomBeer.tagline}</p>
            <p className="grey">First brewed: <span>{RandomBeer.first_brewed}</span> </p>
            <p className="grey">Attenuation level: <span>{RandomBeer.attenuation_level}</span></p>
            <p>{RandomBeer.description}</p>
            </div>
            <Link to="/"><img src={Back} alt="" /></Link>
            <Nav />
        </div>

        
    )
}
export default RandomBier