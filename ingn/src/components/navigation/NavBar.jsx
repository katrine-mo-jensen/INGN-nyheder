import style from "../navigation/navBar.module.scss";
import { MobileNavigation } from "./MobileNavigation";
import { Navigation } from "./Navigation";

export const NavBar = () => {
    return (
        <div className={style.navBar}>
            <MobileNavigation/>
            <Navigation/>
        </div>
    )
}