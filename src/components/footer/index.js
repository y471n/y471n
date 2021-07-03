import { h } from 'preact';
import style from './style.css';

const Header = () => (
	<footer>
      <li><a href="mailto:iamyatin@gmail.com">
        <img src="/assets/icons/email-24.ico" alt="email" />
      </a></li>
      <li>
        <a href="https://twitter.com/255_255_255_255" target="_blank" rel="noreferrer">
          <img src="/assets/icons/twitter-24.ico" alt="twitter" />
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/yatinpy/" target="_blank" rel="noreferrer">
          <img src="/assets/icons/linkedin-24.ico" alt="linkedin" />
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/theuniqueusername/" target="_blank" rel="noreferrer">
          <img src="/assets/icons/instagram-24.ico" alt="instagram" />
        </a>
      </li>
    </footer>
);

export default Header;
