import { Link } from 'react-router-dom'

export const Navigation = () => {

    return(
        <nav>
            <h2>INGN</h2>
            <div>
                <Link to="/">Alle</Link>
                <Link to="/indland">Indland</Link>
                <Link to="/udland">Udland</Link>
                <Link to="/teknologi">Teknologi</Link>
                <Link to="/sport">Sport</Link>
                <Link to="/politik">Politik</Link>
                <Link to="/samfund">Samfund</Link>
            </div>
            <div></div>
        </nav>
    )
}