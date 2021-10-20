const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.listen(3000, function() {
    console.log('http://localhost:3000')
});

const users = [{name: 'user1'}, {name: 'user2'}]

app.get('/', function (req, res) {
    res.json({message: 'hello'})
});

app.get('/get-users', function (req, res) {
    res.json(users)
});

app.post('/create-user', function (req, res) {
    console.log(req.body)
    users.push(req.body)
    res.json(users)
});


app.put('/create-user', function (req, res) {
    console.log('put');
    console.log(req.body)
    users.push(req.body)
    res.json(users)
});