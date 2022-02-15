let express = require('express');
let app = express();
let bodyParser = require('express');
const jwt = require('jsonwebtoken');
const requestHandlers = require("./request-handler");
const mysql = require('mysql');

const PORT = process.env.PORT || 8081;

app.listen(PORT, () => console.log("Listening on http://localhost:" + PORT + "..."));
app.use(express.static('www'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(__dirname + '/public'));

console.log("Ligado");



const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    database: 'adopt4paws',
    password: '1234'
});

db.connect((err) => {
    if(err) throw err;
    console.log('Connected to Database')
});

app.get("/usuario", (req, res) => requestHandlers.getUsuario(req, res)); 

app.get("/animal", (req, res) => requestHandlers.getAnimal(req, res)); 
