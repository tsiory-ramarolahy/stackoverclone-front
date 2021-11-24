import './Nav.css';
import logo from './stack_logo.png';

export const Nav = () => {
    return <div className="Nav">
        <div className="orange-line"></div>
        <div className="nav">
            <a href="#" className="logo"><img src={logo} alt="StackOverflow logo" /></a>
            <a href="#" className="nav-link">About</a>
            <a href="#" className="nav-link">Products</a>
            <a href="#" className="nav-link">For Teams</a>
            <input type="search" name="search" id="search" placeholder="Search..." />
            <div className="nav-btns">
                <a href="#" className="btn btn-lblue">Log in</a>
                <a href="#" className="btn btn-blue">Sign up</a>
            </div>
        </div>
    </div>
}