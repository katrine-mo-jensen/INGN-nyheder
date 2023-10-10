import { NavLinks } from "./NavLinks";
import style from "../navigation/navBar.module.scss";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { Link } from "react-router-dom";

export const MobileNavigation = () => {
  const [open, setOpen] = useState(false);

  const burgerOpen = <AiOutlineMenu className={style.burger} onClick={() => setOpen(!open)} />
  const burgerClosed = <AiOutlineClose className={style.burger} onClick={() => setOpen(!open)} />
  return (
    <nav className={style.mobileNavigation}>
      <Link to="/">
        <h1>INGN</h1>
      </Link>
      {open ? burgerClosed : burgerOpen}
      {open && <NavLinks />}
    </nav>
  );
};
