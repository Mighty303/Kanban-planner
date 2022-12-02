# Kanban Planner App
Deployed at: <a href="https://web-production-bed5.up.railway.app/">https://web-production-bed5.up.railway.app/</a>


<h2>Introduction</h2>
<p>
    My project simulates a Kanban planner application that can move tasks horizontally depending on their progress.
    I used APIs to pass the data from the data base to the front-end state logic in React.
</p>

<h2>Features</h2>
<ul>
    <li>Move tasks around freely as you complete them</li>
    <li>Delete tasks after you have completed them</li>
</ul>

<h2>Technologies Used</h2>
<p>Client</p>
<ul>
    <li>React JS </li>
    <li>Redux (for managing application state)</li>
    <li>Axios (for making api calls)</li>
    <li>Material UI(for alerts and icons)</li>
</ul>
<p>Server</p>
<ol>
    <li>Express</li>
    <li>Mongoose</li>
</ul>
<p>Databse</p>
<ul>
    <li>MongoDB (MongoDB Atlas)</li>
</ul>

<h2>API Documentation</h2>
<p>
    GET 'api/v1/tasks' queries the database for tasks and sends it back <br>
    POST 'api/v1/tasks' creates a new task on the database and saves it <br>
    PATCH 'api/v1/:column' Filters through the database and finds the document by its id and updates it <br>
    DELETE 'api/v1/:id' Finds target document by its id and deletes it. <br>

</p>
