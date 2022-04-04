import React from 'react';
import Header from './components/Header';
import TaskForm from './components/TaskForm';
import Tasks from './components/Tasks';

const App = props => {
    return (
        <>
            <Header />
            <TaskForm />
            <Tasks />
        </>
    );
};

export default App;