import { Link, NavLink } from "react-router-dom";

function Navbar() {
    return (
        <header className="navbar">

            <Link to="/" className="navbar-brand">
                AR
            </Link>

            <nav className="navbar-links">

                <NavLink to="/">
                    Home
                </NavLink>

                <NavLink to="/registration">
                    Registration
                </NavLink>

                <NavLink to="/products">
                    Products
                </NavLink>

            </nav>

        </header>
    );
}

export default Navbar;