import React from 'react';
import '../styles/Navbar.css'; // Import CSS file


function Navbar() {
return (
<nav className="navbar">
<div className="navbar-logo"><img className='my-logo' src='/images/logo.png'></img></div>
<ul className="navbar-menu">
<li><a href="#" className="navbar-link">Home</a></li>
<li><a href="#" className="navbar-link">⌕Search</a></li>
<li><a href="#" className="navbar-link">✧fanfics✧</a></li>
<li><a href="#" className="navbar-link">Fanart🛠</a></li>
</ul>
</nav>
);
}
export default Navbar;