import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <header className="header">
            <div className="header-wrap">
                <a href="" className="logo">2021 TEST</a>
                <input className="menu-btn" type="checkbox" id="menu-btn" />
                <label className="menu-icon" for="menu-btn"><span className="navicon"></span></label>
                <ul className="menu">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </div>
        </header>
    )
}

export default Header