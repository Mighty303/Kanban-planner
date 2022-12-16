import React from 'react';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EventIcon from '@mui/icons-material/Event';
import '../styles/tasks.css'


const Task = props => {
    return (
        <div key={props.index} className="task noselect">
            <h2 className="task-title">
                {props.name}
                <span id="del">
                    <IconButton aria-label="delete" color="error" id={props.id} onClick={props.handleDelete}>
                        <DeleteIcon />
                    </IconButton>
                </span>
            </h2>

            <p className="task-item">{props.description}</p>
            <p className="task-date"><EventIcon /><span>{props.date}</span></p>
        </div>
    );
};

export default Task;