import React from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import { SuccessAlert } from './Alerts.js';
import { useState } from 'react';
import Fade from "@mui/material/Fade";

const App = props => {
    const [columns, setColumns] = useState([{column:'To Do', tasks:[]}, {column:'In progress', tasks:[]}, {column:'Completed', tasks:[]}]);
    const [newTask, setNewTask] = useState(false);
    const [deletedTask, setDeletedTask] = useState(false);
    const [movedTask, setMovedTask] = useState(false);

    var time_out;

    return (
        <main>
            <div id="wrapper">
                <Header 
                        newTask={newTask} 
                        setNewTask={setNewTask} 
                />
                <section className="tasks-section">
                    <Tasks 
                        columns={columns} 
                        setColumns={setColumns} 

                        newTask={newTask} 
                        setNewTask={setNewTask} 
                        
                        deletedTask={deletedTask}
                        setDeletedTask={setDeletedTask}

                        movedTask={movedTask}
                        setMovedTask={setMovedTask}
                    />
                </section>
            </div>
            <Fade
                    in={newTask && !movedTask} //Write the needed condition here to make it appear
                    timeout={{ enter: 1000, exit: 1000 }} //Edit these two values to change the duration of transition when the element is getting appeared and disappeard
                    addEndListener={() => {
                        clearTimeout(time_out);
                        time_out = setTimeout(() => {
                            setNewTask(false)
                        }, 2000);
                        
                    }}
                    id="alert"
                >
                    {SuccessAlert('Task added!')}
            </Fade>

            <Fade
                    in={deletedTask} //Write the needed condition here to make it appear
                    timeout={{ enter: 1000, exit: 1000 }} //Edit these two values to change the duration of transition when the element is getting appeared and disappeard
                    addEndListener={() => {
                        clearTimeout(time_out);
                        time_out = setTimeout(() => {
                            setDeletedTask(false)
                        }, 2000);
                    }}
                    id="alert"
                >
                    {SuccessAlert('Task deleted!')}
            </Fade>
        </main>
    );
};

export default App;