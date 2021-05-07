//import {faFacebook} from
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import homepageImage from "../images/mormontemple.jpg";

function HomePage() {
  return (
    <div className="HomePage">
      <header className="hero">
        <h1 className="hero-text"> </h1>
        <p className="h-sub-text">
          Conversion of part of the lower level of the Historic Chase Park Plaza
          into 5 Cinemas including lobby and a new yet traditional looking grand
          Marquee, St. Louis, Missouri.
        </p>
        <img src={homepageImage} alt="" />
        <div className="icons">
          <Link className="icon-holder">
            <FontAwesomeIcon icon={faCoffee} className="icon gh" />
          </Link>
        </div>
      </header>
    </div>
  );
}

export default HomePage;
