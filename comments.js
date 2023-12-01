// Create web server
app.get('/comments', (req, res) => {
    // Get all comments from DB
    db.collection('comments').find().toArray((err, result) => {
        if(err) return console.log(err);
        // Send response
        res.send(result);
    });
});

// Path: comments.js
// Create web server
app.get('/comments/:id', (req, res) => {
    // Get all comments from DB
    db.collection('comments').find({"_id": ObjectID(req.params.id)}).toArray((err, result) => {
        if(err) return console.log(err);
        // Send response
        res.send(result);
    });
});

// Path: comments.js
// Create web server
app.post('/comments', (req, res) => {
    // Create new comment
    db.collection('comments').save(req.body, (err, result) => {
        if(err) return console.log(err);
        // Send response
        console.log('Saved to DB');
        res.redirect('/');
    });
});

// Path: comments.js
// Create web server
app.put('/comments/:id', (req, res) => {
    // Update comment
    db.collection('comments').findOneAndUpdate({"_id": ObjectID(req.params.id)}, {
        $set: {
            name: req.body.name,
            comment: req.body.comment
        }
    }, (err, result) => {
        if(err) return res.send(err);
        // Send response
        res.send(result);
    });
});

// Path: comments.js
// Create web server
app.delete('/comments/:id', (req, res) => {
    // Delete comment
    db.collection('comments').findOneAndDelete({"_id": ObjectID(req.params.id)}, (err, result) => {
        if(err) return res.send(500, err);
        // Send response
        res.send('Comment deleted!');
    });
});

// Path: comments.js
// Create web server
app.listen(3000, () => {
    console.log('Server running on port 3000...');
});