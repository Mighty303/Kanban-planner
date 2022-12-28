import React from 'react';
import kanban from '../../public/images/kanban.png';
import '../styles/home-header.css';

const HomeHeader = props => {

    return (
        <header>
            <div className="home-header">
                <img src={kanban} height="50px" width="50px" alt="kanban logo" id="kanban-logo" />
                {/* <h1>Kanban Planner</h1> */}
            </div>

        </header>
    );
};

export default HomeHeader;