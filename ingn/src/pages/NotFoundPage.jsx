import { Link } from "react-router-dom"
import style from '../pages/notFoundPage.module.scss'

export const NotFoundPage = () => {

    return (
        <section className={style.notFound}>
            <h2>404 Not found</h2>
            <p>An unknown error occured</p>
            <Link to="/">Click here to go back</Link>
        </section>
    )
}