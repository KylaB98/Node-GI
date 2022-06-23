/* const express = require('express');
const app = express(); */



const employees = [
{
    firstName: "Temperance",
    lastName: "Brennan",
    employeeID: 01,
    salary:450000,
    department: "Anthropology"
},
{
    firstName: "Angela",
    lastName: "Montenegro",
    employeeID: 02,
    salary: 250000,
    department: "IT"
},
{
    firstName: "Jack",
    lastName: "Hodgins",
    employeeID: 03,
    salary: 350000,
    department: "Botany"
},
{
    firstName: "Seely",
    lastName: "Booth",
    employeeID: 04,
    salary: 150000,
    department: "FBI"
},
{
    firstName: "Camille",
    lastName: "Saroyan",
    employeeID: 05,
    salary: 550000,
    department: "Forensic"
},
{
    firstName: "Lance",
    lastName: "Sweets",
    employeeID: 06,
    salary: 250000,
    department: "Psychology"
},
{
    firstName: "Gregory",
    lastName: "House",
    employeeID: 07,
    salary: 650000,
    department: "Diagnostics"
},
{
    firstName: "Eric",
    lastName: "Foreman",
    employeeID: 09,
    salary: 550000,
    department: "Nuerology"
},
{
    firstName: "Lisa",
    lastName: "Cuddy",
    employeeID: 10,
    salary: 850000,
    department: "Administration"
}];

app.get('api/employees', (req, res) => {
    res.send(employees)
});

app.get('/api/employees/:employeeID', (req, res) => {
    const employee = employees.find(c => c.id === parseInt(req.params.id));
    if (!employee) res.staatus(404).send('Employee Not Found');
    req.send(employee);
})

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));