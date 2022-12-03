import React from 'react';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EventIcon from '@mui/icons-material/Event';
import styles from '../styles/tasks.css'

const columnNames = ['To Do', 'In Progress', 'Completed'];

const Task = props => {
    return (
        <div key={props.index} className="task">
            <h2 className="task-title">
                {props.name}
                <span id="del">
                    <IconButton aria-label="delete" color="error" id={props.id} onClick={props.handleDelete}>
                        <DeleteIcon />
                    </IconButton>
                </span>
            </h2>

            <p className="task-item">{props.description}</p>

            <select name="options" className="task-item" id={props.id} onChange={props.handleSelect}> {/*Select Column*/}
                <option value="-- Choose a Column --">-- Choose a Column --</option>
                {columnNames.map((columnName, index) => <option key={index} value={columnName}>{columnName}</option>)}
            </select>
            
            <p className="task-date"><EventIcon /><span>{props.date}</span></p>
        </div>
    );
};

export default Task;