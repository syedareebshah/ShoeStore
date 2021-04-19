import '../App.css';
import { Link } from "react-router-dom";

function Nav() {
    return (
        <div className='NavList'>
            <h3>
            <Link className="Navigation__link" to="/">
                Home
            </Link>
            </h3>

            <h3>
            <Link className="Navigation__link" to="/About">
                About
            </Link>
            </h3>

            <h3>
            <Link className="Navigation__link" to="/Store">
                Store
            </Link>
            </h3>
        </div>

    );
}

export default Nav;
