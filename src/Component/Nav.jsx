import { Link } from "react-router-dom"
import logo from "../Bier.png"

const Nav = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/"><img src={logo} alt=""/></Link>
                </li>
            </ul>
        </nav>
    )
}
export default Nav