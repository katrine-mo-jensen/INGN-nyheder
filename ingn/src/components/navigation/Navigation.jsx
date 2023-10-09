import { Link } from "react-router-dom";
import style from "../navigation/navigation.module.scss";

export const Navigation = () => {
  return (
    <nav>
      <div className={style.navBar}>
        <Link to="/">
          <h1>INGN</h1>
        </Link>
        <div className={style.navLinks}>
          <Link to="/">Alle</Link>
          <Link to="/indland">Indland</Link>
          <Link to="/udland">Udland</Link>
          <Link to="/teknologi">Teknologi</Link>
          <Link to="/sport">Sport</Link>
          <Link to="/politik">Politik</Link>
          <Link to="/samfund">Samfund</Link>
        </div>
      </div>
    </nav>
  );
};
