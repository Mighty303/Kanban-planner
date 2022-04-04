import React from 'react';

const TaskForm = props => {
    
    return (
        <div>
            <form>
                <label>Add a task</label>
                <input type="text" name="task" placeholder="Add a task" />
                <input type="text" name="task" placeholder="Tags" />
                <textarea type="text" name="task" placeholder="Tags" />
                <button>Submit</button>
            </form>
        </div>
    );
};

export default TaskForm;