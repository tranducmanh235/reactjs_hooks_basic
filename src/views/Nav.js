import { Link, NavLink } from "react-router-dom";
import "../views/Nav.scss";

const Nav = () => {
    return (
        <div>
            <div className="topnav">
                <NavLink activeClassName="active1" to="/" exact>
                    Home
                </NavLink>
                <NavLink activeClassName="active1" to="/timer">
                    Timer App
                </NavLink>
                <NavLink activeClassName="active1" to="/secret">
                    Secret
                </NavLink>
            </div>
        </div>
    );
};

export default Nav;
