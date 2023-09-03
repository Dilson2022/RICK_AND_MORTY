import React from "react"
import SearchBar from '../SearchBar/SearchBar.jsx';
import { Link } from "react-router-dom";
import styles from "./Nav.module.css" 

function Nav({onSearch}) {
    return(
        <div>
            <SearchBar onSearch ={onSearch} />
            <nav className={styles.link}>
            <Link to="/home" >Home</Link>
            <Link to="/about" >About</Link>
            <Link to="/favorites" > <button>💛</button></Link>

            </nav>
        </div>
    )
}

export default Nav;