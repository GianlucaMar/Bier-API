import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import Nav from "./Nav"
import Back from "../Back.png"

const Details = () => {
    let apiId = useParams("_id")
    console.log(apiId._id)

        const[bier, setBier] = useState([])

    useEffect(() => {
        fetch(`https://ih-beers-api2.herokuapp.com/beers/${apiId._id}`)
        .then(response => response.json())
        .then(json => {
            console.log(json)
            setBier(json)
        })
    },[apiId._id])

    return(
        <div>
            <div className="debottleimg">
            <img className="debottleimg" src={bier.image_url} alt="" />
            </div>
            <div className="margin">
            <p className="biername">{bier.name}</p>
            <p className="debottlecol">{bier.tagline}</p>
            <p className="grey">First brewed: <span>{bier.first_brewed}</span></p>
            <p className="grey">Attenuation level: <span>{bier.attenuation_level}</span></p>
            <p>{bier.description}</p>
            </div>
            <Link to="/AllBeer"><img src={Back} alt="" /></Link>
            <Nav />
        </div>

        
    )
}
export default Details