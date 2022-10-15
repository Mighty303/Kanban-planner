import React from 'react';
import TaskForm from './TaskForm';

const Modal = ({open}) => {
    if (!open) return null
    return (
        <section className="form-section">
            <TaskForm />
        </section>
    )
}

export default Modal;