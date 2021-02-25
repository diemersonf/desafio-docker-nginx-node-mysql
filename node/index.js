const { json } = require('express');
const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};
const mysql = require('mysql')
const connection = mysql.createConnection(config)

const sql = `insert into people(name) values ('Diemerson Oliveira')`

app.get('/', (req,res) => {
    connection.connect(function(err) {
        if (err) throw err;
            connection.query(sql)
        if (err) throw err;
            connection.query("SELECT name FROM people", function (err, result, fields) {
                const json = JSON.stringify(result)
                if (err) throw err;
                    res.send('<h1>Full Cycle Rocks!</h1>'.concat(json))
            });
        connection.end()
    }); 
})

app.listen(port, ()=> {
    console.log('Rodando na porte '+ port) 
});
 