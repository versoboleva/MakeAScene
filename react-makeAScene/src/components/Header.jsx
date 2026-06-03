import React, { useState, useEffect } from "react";
import '../css/Header.css'
import SearchIcon from "../assets/searchIcon.jsx";
import FilterIcon from "../assets/filterIcon.jsx";
import placeholder from '../assets/image.png'


const Header = ({ activeSetting, setActiveSetting, onSidebarClick, onFilterbarClick }) => {
 
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);


  const navLinks = [
    { id: 1, name: "Nearby", href: "#" },
    { id: 2, name: "MyScene", href: "#" },
    { id: 3, name: "GetInvolved", href: "#" },
  ];

  return (
    <header className={isVisible ? "visible" : ""}>
      <div className="container">
        <div className="navbar">
            <div className="mobile-left">
                <div className="menu-btn" onClick={onSidebarClick}>
                    <span />
                    <span />
                    <span />
                </div>
            </div>
            
            <div className="left">
                <div className="logo-icon" onClick={onSidebarClick}>
                    <img src={placeholder} alt="logo icon" />
                </div>
                
                <div className="logo">MakeAScene</div>

                <nav className="nav-links">
                {navLinks.map((link) => (
                <a
                    key={link.id}
                    href={link.href}
                    className={activeSetting === link.name ? "active" : ""}
                    onClick={(e) => {
                    e.preventDefault();
                    setActiveSetting(link.name);
                    }}
                >
                    {link.name}
                </a>
                ))}
                </nav>
            </div>

            {/* RIGHT GROUP */}
            <div className="right">

                <div className="search">
                    <span className="search-icon">
                        <SearchIcon className="icon" />
                    </span>

                    <input
                        type="text"
                        placeholder="Search..."
                    />
                </div>

                {/* FILTER BUTTON */}
                <div
                    className="filter"
                    onClick={onFilterbarClick}
                >
                    <span className="filter-icon">
                        <FilterIcon className="icon" />
                    </span>
                </div>


                <div className="mobile-search-icon">
                    <SearchIcon className="icon"/>
                </div>
            </div>
        </div>

      </div>
    </header>
  );
};

export default Header;