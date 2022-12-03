import React from 'react';
import Modal from './Modal';
import kanban from '../../public/images/kanban.png';
import { useState } from 'react';
import styles from '../styles/header.css';

const Header = props => {
    const [modalIsOpen, setIsOpen] = useState(false);

    return (
        <header>
            <div>
                <button className="add-task-btn" onClick={()=> setIsOpen(true)}>+ Task</button>
                <img src={kanban} height="50px" width="50px" alt="kanban logo" id="kanban-logo" />
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