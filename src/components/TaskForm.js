import React from 'react';
import axios from 'axios';

import { useState } from 'react';

const TaskForm = props => {
    const [errors, setErrors] = useState('');

    const sanitizeForm = () => {
        const validPriority = ['low', 'medium', 'high', 'urgent'];
        let name = document.getElementById('name').value;
        let priority = document.getElementById('priority').value;
        let description = document.getElementById('description').value;

        if (name.length > 40) {
            setErrors('Task name is too long');
            return false;
        }
        if (description.length > 200) {
            setErrors('Description is too long. Max 200 characters');
            return false;
        }
        if (!validPriority.includes(priority)) {
            setErrors('Error, please try again.');
            return false
        }
        return true;
    }

    const handleFormSubmit = event => {
        event.preventDefault();

        if (!sanitizeForm())
            return;

        let taskName = document.getElementById('name').value;
        let taskPriority = document.getElementById('priority').value;
        let taskDescription = document.getElementById('description').value;

        let task = {
            column: 'To Do',
            name: taskName,
            priority: taskPriority,
            description: taskDescription
        }

        axios.post(`/api/v1/tasks`, task)
        .then(result=> { 
            props.setNewTask(!props.newTask);
        })
        .catch(err=> console.log(err));
    }

    return (
        <form className="form-container" onSubmit={e=>handleFormSubmit(e)}>
            <fieldset>
            <legend>Add a task</legend>
                <div className="form-items">
                    <div id="errors" className="error">{errors}</div>
                    <label>Task Name:</label>
                    <input type="text" id="name" name="task" placeholder="Task Name" required />
                    <label>Priority:</label>
                    <select name="priority" id="priority" required>
                        <option id="low" value="low">Low</option>
                        <option id="medium" value="medium">Medium</option>
                        <option id="high" value="high">High</option>
                        <option id="urgent" value="urgent">Urgent</option>
                    </select>
                    <label>Description:</label>
                    <textarea type="text" name="description" id="description" placeholder="Description here ..." required />
                    <button>Submit</button>
                </div>
            </fieldset>
        </form>
    );
};

export default TaskForm;