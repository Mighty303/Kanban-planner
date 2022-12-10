import React from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import Task from './Task.js';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const Tasks = props => {

    useEffect(function loadNewTask() {
        loadTasks();
    },[props.newTask, props.movedTask]);

    const loadTasks = () => {
        axios.get('/api/v1/tasks')
        .then(result => {
            let columnsCopy = [{column:'To Do', tasks:[]}, {column:'In Progress', tasks:[]}, {column:'Completed', tasks:[]}];
            columnsCopy.forEach((column, index) => {
                result.data.forEach(task => {
                    if (column.column === task.column) 
                        columnsCopy[index].tasks.push(task);
                    })
            });
            props.setColumns(columnsCopy);
        })
        .catch(err => console.log(err));
    }


    const handleOnDragEnd = result => {
        let target = result.draggableId;
        let targetColumn = result.destination.droppableId;
        let targetIndex = result.destination.index;

        let targetTask;

        // Remove the task synchronously to avoid flickering UI
        props.columns.forEach(column => {
            column.tasks.forEach((task, index) => {
                if (task._id === target) {
                    targetTask = task;
                    column.tasks.splice(index, 1);
                }
            })
        });

        // Add the task to the right column to avoid flickering UI on that column
        props.columns.forEach(column => {
            if (column.column === targetColumn) {
                column.tasks.push(targetTask);
                props.setColumns(props.columns);
            }
        });

        axios.patch(`/api/v1/${targetColumn}`, {_id: target, index: targetIndex })
        .then(patchedResult => {
            // console.log(patchedResult.data);
            props.setMovedTask(!props.movedTask);
        })
        .catch(err => console.log(err));
    }

    const handleDelete = event => {
        const selected = event.currentTarget.id;
        axios.delete(`/api/v1/${selected}`)
        .then(result=> {
            loadTasks();
            props.setDeletedTask(!props.deletedTask);
        })
        .catch(err => console.log(err));
    };

    return (
        <DragDropContext onDragEnd={handleOnDragEnd}>
            <div className="columns">
                {
                    props.columns.map((column, index) => // Loop thru the columns
                        <Droppable droppableId={column.column} key={index}>
                            {(provided) => 
                                <div 
                                    className="column"
                                    {...provided.droppableProps} 
                                    ref={provided.innerRef}
                                >
                                    {<h2 className="column-headers">{column.column}</h2>} {/*Column Title*/}
                                        {
                                            column.tasks && column.tasks.map((task, index) => // Loop thru the tasks
                                                <Draggable 
                                                    key={task._id}
                                                    draggableId={task._id} 
                                                    index={index}
                                                >
                                                    {(provided) => 
                                                        <div 
                                                            ref={provided.innerRef}
                                                            {...provided.draggableProps}
                                                            {...provided.dragHandleProps}
                                                        >
                                                            <Task 
                                                                name={task.name} 
                                                                index={index} 
                                                                id={task._id} 
                                                                description={task.description} 
                                                                date={task.date}
                                                                handleDelete={handleDelete} 
                                                            />
                                                        </div>
                                                    }
                                                </Draggable>)
                                        }
                                        {provided.placeholder}
                                </div>
                            }
                        </Droppable>)
                }
            </div>
        </DragDropContext>
    );
};

export default Tasks;