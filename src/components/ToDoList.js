//Import de react
import React from 'react';
import ToDo from './ToDo';

const ToDoList = ({ tasks, match, onToggleCompleted }) => {
    // variable 
    let filteredTasks;

    //selon si c'est completed ou pas 
    switch(match.params.filter) {
        case "completed":
            //filtre des datas completed
            filteredTasks = tasks.filter((task) => task.completed);
            break;
        default:
            //default je rend tout mais taches
            filteredTasks = tasks;
    }

    // si le filteredTask et = a 0 alors afficher Aucune tache completer
    if(filteredTasks.length === 0) {
        return (
            <>
                <h1 className='m-3'>Liste de tâches</h1>
                <ul className='list-group m-3'>
                    <li className="list-group-item"> Aucune tache completer </li>
                </ul>
            </>
        )
    } else {

        return (
            <>
                <h1 className='m-3'>Compétences professionnelles</h1>
                <ul className='list-group m-3'>
                    {/* pour du js dans du jsx */}
                    {
                        // recup 1 tache revoie a ToDo une 1 avec son nom rajout de la proprieter de son id (le .map la meme chose qu'un foreach)
                        filteredTasks.map((task) => 
                            (<ToDo task={task} key={task.id} onToggleCompleted={onToggleCompleted}/>)
                        )
                    }
                </ul>
            </>
        );
    };
}

//important export de ma constante
export default ToDoList;
