import React from 'react';
import { useEffect } from 'react';
import axios from 'axios';

const columnNames = ['To Do', 'In Progress', 'Completed'];

const Tasks = props => {
    useEffect(function loadNewTask() {
        loadTasks();
    },[props.newTask]);

    const loadTasks = () => {
        axios.get('/api/v1/tasks')
        .then(result => {
            let columnsCopy = [{column:'To Do', tasks:[]}, {column:'In Progress', tasks:[]}, {column:'Completed', tasks:[]}];
            columnsCopy.forEach((column, index) => {
                result.data.forEach((task) => {
                    if (column.column === task.column)
                        columnsCopy[index].tasks.push(task);
                    })
            });
            props.setColumns(columnsCopy);
        })
        .catch(err => console.log(err));
    }

    const insertData = target => {
        axios.get('/api/v1/tasks')
        .then(result => {
            let columnsCopy = [{column:'To Do', tasks:[]}, {column:'In Progress', tasks:[]}, {column:'Completed', tasks:[]}];
            columnsCopy.forEach((column, index) => {
                result.data.forEach((task) => {
                    if (column.column === task.column && task._id !== target._id)
                        columnsCopy[index].tasks.push(task);
                })
                if (column.column == target.column)
                    columnsCopy[index].tasks.push(target);
            });
            props.setColumns(columnsCopy);
            props.setNewTask(!props.newTask);
        })
        .catch(err => console.log(err));
    };

    const handleSelect = event => {
        let target = event.target.id;
        let targetColumn = event.target.value;
        console.log(target);
        axios.patch(`/api/v1/${targetColumn}`, {_id: target})
        .then(patchedResult => {
            axios.get('/api/v1/tasks')
            .then(result => {
                result.data.forEach((column, index) => {
                    if (column._id === patchedResult.data._id) {
                        result.data.splice(index, 1);
                        insertData(patchedResult.data);
                    }
                })
            })
            .catch(err => console.log(err));
            props.setNewTask(!props.newTask);
        })
        .catch(err => console.log(err));
    };

    const handleDelete = event => {
        const selected = event.target.id;
        axios.delete(`/api/v1/${selected}`)
        .then(result=> {
            loadTasks();
        })
        .catch(err => console.log(err));
    };

    return (
        <>
            <h1 id="column-header">Tasks</h1>
            <div className="columns">
                {
                    props.columns.map((column, index) => <div key={index} className="column">
                        {<h2 className="column-headers">{column.column}</h2>}
                        <div>
                                {column.tasks && column.tasks.map((task, index) => <div key={index} className="task">
                                <h2>
                                    {task.name}
                                    <button id={task._id} onClick={handleDelete} className="delete-btn">Delete</button>                                    
                                </h2>
                                <p className="task-item">{task.description}</p>

                                <select name="options" className="task-item" id={task._id} onChange={handleSelect}>
                                    <option value="-- Choose a Column --">-- Choose a Column --</option>
                                    {columnNames.map((columnName, index) => <option key={index} value={columnName}>{columnName}</option>)}
                                </select>

                                <div className={task.priority}> Priority: {task.priority.toUpperCase()}</div>
                            </div>)}
                        </div>
                    </div>)
                }
            </div>
        </>
    );
};

export default Tasks;