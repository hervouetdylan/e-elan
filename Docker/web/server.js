const express = require('express');
const mysql = require('mysql');
const app = express();
const mysqlClient = mysql.createClient({
  host: 'mysql',
  port: 3366
});


app.get('/', function(req, res) {
    mysqlClient.get('numVisits', function(err, numVisits) {
        numVisitsToDisplay = parseInt(numVisits) + 1;
        if (isNaN(numVisitsToDisplay)) {
            numVisitsToDisplay = 1;
        }
        res.send('web1: Total number of visits is: ' + numVisitsToDisplay);
        numVisits++;
        mysqlClient.set('numVisits', numVisits);
    });
});

app.listen(5000, function() {
    console.log('Web app is listening on port 5000');
});