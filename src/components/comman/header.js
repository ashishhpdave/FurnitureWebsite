import { NavLink } from "react-router-dom"

function Header({ page }) {
    return (
        <nav className="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark" arial-label="Furni navigation bar">                <div className="container">
            <a className="navbar-brand" href="index.html">Furni<span>.</span></a>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsFurni"
                aria-controls="navbarsFurni" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarsFurni">
                <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
                    <li className={page == 'home' ? 'nav-item active' : 'nav-item'}>
                        <NavLink className="nav-link" to="/">Home</NavLink>
                    </li>
                    <li className={page == 'Shop' ? 'nav-item active' : 'nav-item'}>
                        <NavLink className="nav-link" to="/Shop">Shop</NavLink>
                    </li>
                    <li className={page == 'about' ? 'nav-item active' : 'nav-item'}>
                        <NavLink className="nav-link" to="/about-us">About us</NavLink>
                    </li>
                    <li className={page == 'service' ? 'nav-item active' : 'nav-item'}>
                        <NavLink className="nav-link" to="/service">Services</NavLink>
                    </li>
                    <li className={page == 'blog' ? 'nav-item active' : 'nav-item'}>
                        <NavLink className="nav-link" to="/blog">Blog</NavLink>
                    </li>
                    <li className={page == 'Contact' ? 'nav-item active' : 'nav-item'}>
                        <NavLink className="nav-link" to="/contact">Contact us</NavLink>
                    </li>
                </ul>

                <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
                    <li>
                        <NavLink className="nav-link" to="/login&signup">
                            <img src="/images/user.svg" />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="nav-link" to="/add-to-cart">
                            <img src="/images/cart.svg" />
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>

        </nav>
    )
}
export default Header