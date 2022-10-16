import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

const TaskForm = props => {
    const [errors, setErrors] = useState('');

    useEffect(()=> {
        document.getElementById('dateRequired').valueAsDate = new Date();
    });

    const sanitizeForm = () => {
        let name = document.getElementById('name').value;
        let description = document.getElementById('description').value;

        if (name.length > 40) {
            setErrors('Task name is too long');
            return false;
        }
        if (description.length > 200) {
            setErrors('Description is too long. Max 200 characters');
            return false;
        }

        return true;
    }

    const handleFormSubmit = event => {
        event.preventDefault();

        if (!sanitizeForm())
            return;

        let taskName = document.getElementById('name').value;
        let taskDescription = document.getElementById('description').value;
        let taskDate = document.getElementById('dateRequired').value;

        let task = {
            column: 'To Do',
            name: taskName,
            description: taskDescription,
            date: taskDate
        }

        axios.post(`/api/v1/tasks`, task)
        .then(result=> { 
            props.setNewTask(!props.newTask);
        })
        .catch(err=> console.log(err));

        // Reset form values
        document.getElementById('name').value = document.getElementById('name').defaultValue;
        document.getElementById('description').value = document.getElementById('description').defaultValue;
        document.getElementById('dateRequired').value = document.getElementById('dateRequired').defaultValue;

        props.onClose(); // close the modal once we're done
    }

    return (
        <form className="form-container" onSubmit={e=>handleFormSubmit(e)}>
            <div class="add-task">
                <div className="form-items">
                    <h2>Add a task</h2>
                    <div id="errors" className="error">{errors}</div>
                    <label>Task Name:</label>
                    <input type="text" id="name" name="task" placeholder="Task Name" spellCheck="true" required />
                    <label>Description:</label>
                    <textarea type="text" name="description" id="description" placeholder="Description here ..." spellCheck="true" required />
                    <label>Date:</label>
                    <input type="date" id="dateRequired" />
                    <button>Submit</button>
                </div>
            </div>
        </form>
    );
};

export default TaskForm;