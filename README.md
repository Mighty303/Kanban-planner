# Kanban Planner App
Deployed at: <a href="https://kanban-planner2022.herokuapp.com/">https://https://kanban-planner2022.herokuapp.com/</a>


<h2>Introduction</h2>
<p>
    My project simulates a Kanban planner application that can move tasks horizontally depending on their progress.
    I used APIs to pass the data from the data base to the front-end state logic in React.
</p>

<h2>List of features I am proud of:<h2>
<ul>
    <li>Using other HTTP responses such as patch and delete. I had to google on my own and I learned that delete does not take an object.</li>
    <li>Moving the tasks horizontally also took a lot of time and effort and mastery of React to understand my errors and eventually getting it working</li>
</ul>

<h2>Features</h2>
<ol>
    <li>Separate important tasks depending on its urgency</li>
    <li>Move tasks around freely as you complete them</li>
    <li>Delete tasks after you have completed them</li>
</ol>

<h2>API Documentation</h2>
<p>
    GET 'api/v1/tasks' queries the database for tasks and sends it back <br>
    POST 'api/v1/tasks' creates a new task on the database and saves it <br>
    PATCH 'api/v1/:column' Filters through the database and finds the document by its id and updates it <br>
    DELETE 'api/v1/:id' Finds target document by its id and deletesd it. <br>

</p>
