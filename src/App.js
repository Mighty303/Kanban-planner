import React from 'react';
import Header from './components/Header';
import TaskForm from './components/TaskForm';
import Tasks from './components/Tasks';
import { useState } from 'react';

const App = props => {
    const [tasks, setTasks] = useState([]);

    return (
        <main>
            <Header />
            <section className="form-section">
                <TaskForm />
            </section>

            <section className="tasks-section">
                <Tasks />
            </section>
        </main>
    );
};

export default App;