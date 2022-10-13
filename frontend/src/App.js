import React from 'react';
import Header from './components/Header';
import TaskForm from './components/TaskForm';
import Tasks from './components/Tasks';
import { useState } from 'react';

const App = props => {
    const [columns, setColumns] = useState([{column:'To Do', tasks:[]}, {column:'In progress', tasks:[]}, {column:'Completed', tasks:[]}]);
    const [newTask, setNewTask] = useState(false);

    return (
        <main>
            <div id="wrapper">
                <Header />
                <section className="form-section">
                    <TaskForm 
                        columns={columns} 
                        setColumns={setColumns} 
                        newTask={newTask} 
                        setNewTask={setNewTask} 
                    />
                </section>

                <section className="tasks-section">
                    <Tasks 
                        columns={columns} 
                        setColumns={setColumns} 
                        newTask={newTask} 
                        setNewTask={setNewTask} />
                </section>
            </div>
        </main>
    );
};

export default App;