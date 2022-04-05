import React from 'react';
import { useState } from 'react';

const Tasks = props => {
    const [columns, setColumns] = useState(['To Do', 'In progress', 'Completed']);
    return (
        <>
            <h2>Tasks</h2>

            <div className="columns">
                {
                    columns.map((column, index) => <div key={index}>
                        {column}
                    </div>)
                    
                }
                <div>
                    Add a column
                    <button>+</button>
                </div>
            </div>
        </>
    );
};

export default Tasks;