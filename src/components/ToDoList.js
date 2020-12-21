//Import de react
import React from 'react';
import ToDo from './ToDo';

const ToDoList = ({ tasks }) => (
    <>
        <h1 className='m-3'>Liste de tâches</h1>
        <ul className='list-group m-3'>
            {/* pour du js */}
            {
                // recup 1 tache revoie a ToDo une 1 avec son nom rajout de la proprieter de son id (le .map la meme chose qu'un foreach)
                tasks.map((task) => 
                    (<ToDo task={task.name} key={task.id}/>)
                )
            }
        </ul>
    </>
)

//important export de ma constante
export default ToDoList;
