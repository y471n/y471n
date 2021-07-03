import { h } from "preact";
import { Link } from "preact-router/match";
import style from "./style.css";

const Header = () => (
  <header>
    <Link href="/">
      <h1>Yatin M.</h1>
    </Link>
    <nav>
      <li>
        <Link href="/" activeClassName={style.active}>
          About
        </Link>
      </li>
      <li>
        <Link href="/resume" activeClassName={style.active}>
          Resume
        </Link>
      </li>
      <li>
        <Link href="/misc" activeClassName={style.active}>
          Misc
        </Link>
      </li>
    </nav>
  </header>
);

export default Header;
