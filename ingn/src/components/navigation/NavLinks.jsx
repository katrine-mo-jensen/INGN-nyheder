import { Link } from "react-router-dom";

export const NavLinks = () => {
    return (
        <ul>
            <li><Link to="/">Alle</Link></li>
            <li><Link to="/indland">Indland</Link></li>
            <li><Link to="/udland">Udland</Link></li>
            <li><Link to="/teknologi">Teknologi</Link></li>
            <li><Link to="/sport">Sport</Link></li>
            <li><Link to="/politik">Politik</Link></li>
            <li><Link to="/samfund">Samfund</Link></li>
        </ul>
    )
}