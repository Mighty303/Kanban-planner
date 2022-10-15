import React from 'react';
import kanban from '../../public/images/kanban.png';

const Header = props => {
    return (
        <header>
            <div>
                <button class="add-task-btn">+ Add Task</button>
                <img src={kanban} height="50px" width="50px" alt="kanban logo" />
                <h1>Kanban Planner</h1>
            </div>
        </header>
    );
};

export default Header;