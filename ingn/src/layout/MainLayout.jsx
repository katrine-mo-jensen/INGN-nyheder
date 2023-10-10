import { Outlet } from "react-router-dom"
import { NavBar } from "../components/navigation/NavBar"
import { Footer } from "../components/footer/Footer"

export const MainLayout = () => {
    return (
        <main>
            <NavBar/>
            <Outlet/>
            <Footer/>
        </main>
    )
}