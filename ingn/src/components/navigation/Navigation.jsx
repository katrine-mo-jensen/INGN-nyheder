import { Link } from "react-router-dom";
import style from "../navigation/navBar.module.scss";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import { NavLinks } from "./NavLinks";

export const Navigation = () => {
  return (
    <nav className={style.navigation}>
      <Link to="/">
        <h1>INGN</h1>
      </Link>
      <NavLinks />
    </nav>
  );
};
