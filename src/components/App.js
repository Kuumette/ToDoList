import React, { Component } from "react";
//Import de ma list
import ToDoList from "./ToDoList";
//Import de mon footer
import NavBar from "./NavBar";
import AddTask from "./AddTask";
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import initialData from "../initialData";


//Class App qui retourn ...
class App extends Component {
    // Methode render obigatoire 
    render () {
        return (
            <section id='todo'>
                {/* Router pour englobé tout nos element  */}
				<Router>
                    {/* Switch pour englobé nos element route */}
                    <Switch>
                        {/* Recupere l'element AddTask */}
                        <Route path="/add-task" component={AddTask} />
                        {/* Récupere l'element ToDoList */}
                        {/* <Route path="/:filter?" component={ToDoList} /> */}
                        {/* rajouter des props a la place de component metre render et pour faire comme component faire {...props}*/}
                        <Route path="/:filter?" render={(props) => <ToDoList {...props} tasks={initialData} />} />
                    </Switch>
                    {/* Affiche l'element NavBar */}
                    <NavBar />
                </Router>
			</section>
        );
    }
}

//important export de ma class
export default App;