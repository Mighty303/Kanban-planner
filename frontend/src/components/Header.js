import React from 'react';
import Modal from './Modal';
import kanban from '../../public/images/kanban.png';
import { useState } from 'react';

const Header = props => {
    const [modalIsOpen, setIsOpen] = useState(false);

    return (
        <header>
            <div>
                <button class="add-task-btn" onClick={()=> setIsOpen(true)}>+ Add Task</button>
                <img src={kanban} height="50px" width="50px" alt="kanban logo" />
                <h1>Kanban Planner</h1>
            </div>
            <Modal 
                open={modalIsOpen} 
                onClose={()=> setIsOpen(false)}
                newTask={props.newTask} 
                setNewTask={props.setNewTask} 
            />
        </header>
    );
};

export default Header;