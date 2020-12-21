//Import de react
import React from 'react';
//import des icons 
import {
    FaListAlt, 
    FaCheckSquare, 
    FaPlusSquare, 
    FaTrashAlt 
} from "react-icons/fa";
import { Link } from "react-router-dom";


//Constante de mon footer 
const NavBar = () => (
<footer className='d-flex justify-content-between bg-secondary p-3' id='mainFooter'>
    <div className='btn-group'>
        {/* <a href='/' className='btn btn-outline-dark bg-light'>*/}
        <Link to='/' className='btn btn-outline-dark bg-light'>
            {/* Ajout le l'icon */}
            <FaListAlt />
        {/* </a> */}
        </Link>
        <Link to='/completed' className='btn btn-outline-dark bg-light'>
            {/* Ajout le l'icon */}
            <FaCheckSquare />
        </Link>
        <Link to='add-task' className='btn btn-outline-dark bg-light'>
            {/* Ajout le l'icon */}
            <FaPlusSquare />
        </Link>
    </div>
    <button className="btn btn-outline-dark bg-light"> 
        {/* Ajout le l'icon */}
        <FaTrashAlt/> 
    </button>
</footer>
);

//important export de ma constante
export default NavBar;