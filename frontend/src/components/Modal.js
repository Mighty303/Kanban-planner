import React from 'react';
import TaskForm from './TaskForm';
import closeButton from '../../public/images/closeButton.png';

const MODAL_STYLES = { 
    position: 'fixed',
    top: '50%', 
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#293241', 
    padding: '25px', 
    zIndex: 1000
}

const OVERLAY_STYLES = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,.7)', 
    zIndex: 1000
}

const BUTTON_STYLES = {
    position: 'fixed', 
    margin: '10px',
    float: 'right', 
    top: 0,
    right: 0
}

const Modal = props => {
    if (!props.open) return null;
    return (
        <>
            <div style={OVERLAY_STYLES} />
            <div style={MODAL_STYLES}>
                <input type="image" src={closeButton} onClick={props.onClose}  width="25" height="25" style={BUTTON_STYLES}/>
                <TaskForm onClose={props.onClose} column={props.column} newTask={props.newTask} setNewTask={props.setNewTask} />
            </div>
        </>
    );
}

export default Modal;