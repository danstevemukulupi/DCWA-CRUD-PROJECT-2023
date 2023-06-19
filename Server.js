const express = require('express')
const db = require('./db');
const app = express()

//GET '/' (Home Page)
app.get('/', (req, res) => {
    res.send(`
      <h1 style="color:blue;" >Welcome to the Home Page</h1>
      <ul>
        <li style="color:red;"><a href="/employees" style="color:red;">Employees</a></li>
        <li style="color:green;"><a href="/departments" style="color:green;">Departments</a></li>
        <li style="color:#bf00ff;"><a href="/employees-mongodb" style="color:#bf00ff;">Employees (MongoDB)</a></li>
      </ul>
    `);
  });
  
//GET'/EMPLOYEES
app.get('/employees', (req, res) => {
    // Logic to retrieve employees from MySQL database
    // Render and send the employees page
  
    res.send('<h1>Employees Page</h1>');
      
    pool.query('SELECT * FROM employee')
    .then((data) => {
    console.log(data)
    })
    .catch(error => {
    console.log(error)
    })


  });
  
//GET'DEPARTMENTS'
app.get('/departments', (req, res) => {
    // Logic to retrieve departments from MySQL database
    // Render and send the departments page
    res.send(`
      <h1>Departments Page</h1>
      <a href="/">Go back to Home Page</a>
    `);
  });
  
 //GET'/EMPLOYEES-MONGODB
 app.get('/employees-mongodb', (req, res) => {
    // Logic to retrieve employees from MongoDB database
    // Render and send the employees (MongoDB) page
    res.send(
    `
      <h1>Employees (MongoDB) Page</h1>
      <a href="/">Go back to Home Page</a>
    `

    );
  });
  

const port = 3000
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})