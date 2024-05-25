

app.get('/', (req, res) => {
    res.send("hello world !!");
});

app.get('/logData', (req, res) => {
  const query = 'SELECT log.log_date, log.admin_id, login.fname AS adminFname, log.operation FROM log INNER JOIN login ON log.admin_id = login.id;';
    db.query(query, (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.json(results); // Send the query results as JSON response
    });
});

app.get('/log', (req, res) => {
    res.sendFile(__dirname + '/log.html');
});

