//Import de react
import React from 'react';
//import des icons 
import {
    FaListAlt, 
    FaCheckSquare, 
    FaPlusSquare, 
    FaTrashAlt 
} from "react-icons/fa";

//Constante de mon footer 
const NavBar = () => (
    <footer
    className='d-flex justify-content-between bg-secondary p-3'
    id='mainFooter'
>
    <div className='btn-group'>
        <a href='/' className='btn btn-outline-dark bg-light'>
            {/* Ajout le l'icon */}
            <FaListAlt />
        </a>
        <a href='#' className='btn btn-outline-dark bg-light'>
            {/* Ajout le l'icon */}
            <FaCheckSquare />
        </a>
        <a href='add-task' className='btn btn-outline-dark bg-light'>
            {/* Ajout le l'icon */}
            <FaPlusSquare />
        </a>
    </div>
    <button className="btn btn-outline-dark bg-light"> 
        {/* Ajout le l'icon */}
        <FaTrashAlt/> 
    </button>
</footer>
);

//important export de ma constante
export default NavBar;