import React from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EventIcon from '@mui/icons-material/Event';
import Task from './Task.js';

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
        const selected = event.currentTarget.id;
        axios.delete(`/api/v1/${selected}`)
        .then(result=> {
            loadTasks();
        })
        .catch(err => console.log(err));
    };

    return (
        <>
            <div className="columns">
                {
                    props.columns.map((column, index) => <div key={index} className="column">
                        {<h2 className="column-headers">{column.column}</h2>} {/*Column Title*/}
                            {
                                column.tasks && column.tasks.map((task, index) =>
                                    <Task 
                                        key={index}
                                        name={task.name} 
                                        index={index} 
                                        id={task._id} 
                                        description={task.description} 
                                        date={task.date}
                                        handleDelete={handleDelete} 
                                        handleSelect={handleSelect} 
                                    />)
                            }
                    </div>)
                }
            </div>
        </>
    );
};

export default Tasks;