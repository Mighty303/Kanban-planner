import React, { useEffect } from 'react';
import Modal from './Modal';
import kanban from '../../public/images/kanban.png';
import TaskForm from '../components/TaskForm';
import { useState } from 'react';

const Header = props => {
    const [modalIsOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setisOpen(true);
    }

    const afterOpenModal = () => {

    }

    const closeModal = () => {
        setIsOpen(false);
    }

    return (
        <header>
            <div>
                <button class="add-task-btn" onClick={()=> setIsOpen(true)}>+ Add Task</button>
                <img src={kanban} height="50px" width="50px" alt="kanban logo" />
                <h1>Kanban Planner</h1>
            </div>
            <Modal open={modalIsOpen} />
        </header>
    );
};

export default Header;