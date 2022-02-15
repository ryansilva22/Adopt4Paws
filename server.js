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
  /*GET */

  app.get("/id_usuario", requestHandlers.getUsuario);
  
  app.get("/id_animal", requestHandlers.getAnimal);

  app.get("/id_organizacao", requestHandlers.getOrganizacao);

  /*POST */

  app.post("/",requestHandlers.postUsuario);

  app.post("/",requestHandlers.postAnimal);

  app.post("/",requestHandlers.postOrganizacao);


  /*PUT */

  app.put("/id_usuario", requestHandlers.putUsuario);
  
  app.put("/id_animal", requestHandlers.putAnimal);

  app.put("/id_organizacao", requestHandlers.putOrganizacao);

  /*DELETE */
 
  app.delete("/id_usuario", requestHandlers.deleteUsuario);
  
  app.delete("/id_animal", requestHandlers.deleteAnimal);

  app.delete("/id_organizacao", requestHandlers.deleteOrganizacao);
