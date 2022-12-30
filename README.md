# Kanban Planner App
Deployed at: [https://kanban-planner.herokuapp.com/](https://kanban-planner.herokuapp.com/)
Built with the MERN stack (MongoDB, Express, React and NodeJS)


<h2>Introduction</h2>
<p>
    This is a side project I have been working on alongside school for a couple months mainly for fun. I got inspired by github's kanban planner in "Projects" so I wanted to recreate it myself and customize it. 
</p>

<h2>Features</h2>
<ul>
    <li>Drag tasks to different columns</li>
    <li>Delete tasks</li>
</ul>

<h2>Technologies Used</h2>
<p>Client</p>
<ul>
    <li>React</li>
    <li>Redux (for managing application state)</li>
    <li>Axios (for making api calls)</li>
    <li>Material UI (for alerts and icons)</li>
    <li>react-beautiful-dnd (for draggable tasks)</li>
</ul>
<p>Server</p>
<ul>
    <li>Express</li>
    <li>Mongoose</li>
    <li>AJV (Server-sided form validation)</li>
</ul>
<p>Database</p>
<ul>
    <li>MongoDB (MongoDB Atlas)</li>
</ul>

<h2>API Documentation</h2>
<p>
    GET 'api/v1/tasks' queries the database for tasks and sends it back <br>
    POST 'api/v1/tasks' saves a new task on the database.<br>
    PATCH 'api/v1/:column' Updates a task by it's ID.<br>
    DELETE 'api/v1/:id' Finds target by its id and deletes it. <br>

</p>
