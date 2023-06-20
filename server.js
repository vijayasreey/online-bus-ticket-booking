const express = require('express');
const mysql = require('mysql2');


const app = express();
const port = 5000;
app.use(express.json());
// Create a MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '9966799207',
  database: 'onlinbuseserverdb',
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
  } else {
    console.log('Connected to the MySQL database');
  }
});

app.post('/api/createuser', (req, res) => {
  const data = req.body;
  connection.query('INSERT INTO user SET ?', data, (error, results, fields) => {
    if (error) {
      console.error('Error inserting data into the database:', error);
      res.sendStatus(500);
      return;
    }

    console.log('Data inserted into the database:', results);
    res.sendStatus(200);
  });
});

// Define an API endpoint to login user
app.post('/api/login', (req, res) => {
  const data1 = req.body;
  console.log(data1.email);
  console.log(data1.password);
  const sql = 'SELECT * FROM user where email=? and password=?';
  connection.query(sql,[data1.email,data1.password], (err, results) => {
    if (err) {
      console.error('Error fetching data:', err);
      res.sendStatus(500).json({ error: 'Failed to fetch data' });
    } else {
       // Get the number of records
    const recordCount = results.length;
   // console.log("recordCount" + results);
     // Create a resnpm startponse object
  const response = {
    status: 'success',
    recordCount: recordCount,
  };
    
    res.send(response);
   
    }
  });

});
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
