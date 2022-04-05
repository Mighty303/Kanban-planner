import React from 'react';
import axios from 'axios';

const TaskForm = props => {
    const handleFormSubmit = event => {
        event.preventDefault();
        axios.post(`/api/v1/tasks`)
        .then()
        .catch(err=> console.log(err));
    }

    return (
        <form className="form-container" onSubmit={handleFormSubmit}>
            <div className="form-items">
                <label>Add a task</label>
                <div>
                    <input type="text" name="task" placeholder="Add a task" required />
                    <input type="text" name="task" placeholder="Tags" required />
                </div>   
                <textarea type="text" name="task" placeholder="Tags" />
                <button>Submit</button>
            </div>
        </form>
    );
};

export default TaskForm;