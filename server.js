let express = require('express');
let app = express();
let bodyParser = require('express');
var axios = require("axios").default;
const jwt = require('jsonwebtoken');
const requestHandlers = require("./request-handler");
const mysql = require('mysql');

require("dotenv").config();

const PORT = process.env.PORT || 8081;

app.listen(PORT, () => console.log("Listening on http://localhost:" + PORT + "..."));
app.use(express.static('www'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(__dirname + '/public'));

app.get("/", (req, res) => {
    console.log(__dirname);
    return res.sendFile(__dirname + "/index.html");
});

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

  app.get("/usuario/:id_usuario?", (req, res) => requestHandlers.getUsuario(req, res));

  app.get("/usuarioasc", (req, res) => requestHandlers.getUsuarioAsc(req, res));

  app.get("/usuariodesc", (req, res) => requestHandlers.getUsuarioDesc(req, res));
  
  app.get("/animal/:id_animal?", (req, res) => requestHandlers.getAnimal(req, res));

  app.get("/animaldog", (req, res) => requestHandlers.getAnimalTipoDog(req, res));

  app.get("/animalcat", (req, res) => requestHandlers.getAnimalTipoCat(req, res));

  app.get("/animalmasculino", (req, res) => requestHandlers.getAnimalMasculino(req, res));

  app.get("/animalfeminino", (req, res) => requestHandlers.getAnimalFeminino(req, res));

  app.get("/animalmenor5anos", (req, res) => requestHandlers.getAnimalMenor5anos(req, res));

  app.get("/animalmenor10anos", (req, res) => requestHandlers.getAnimalMenor10anos(req, res));

  app.get("/animalmaior10anos", (req, res) => requestHandlers.getAnimalMaior10anos(req, res));

  app.get("/organizacao/:id_organizacao?", (req, res) => requestHandlers.getOrganizacao(req, res));

  app.get("/login/:id_login?", (req, res) => requestHandlers.getLogin(req, res));

  /*POST */

  /*app.post("/Usuario",requestHandlers.postUsuario);

  app.post("/Animal",requestHandlers.postAnimal);

  app.post("/Organizacao",requestHandlers.postOrganizacao);*/


  /*PUT */

  app.put("/usuario/:id_usuario?", (req, res) => requestHandlers.putUsuario(req, res));


  /*DELETE */

  app.delete("/usuario/:id_usuario?", (req, res) => requestHandlers.deleteUsuario(req, res));
 
  app.delete("/animal/:id_animal?", (req, res) => requestHandlers.deleteAnimal(req, res));

  app.delete("/organizacao/:id_organizacao?", (req, res) => requestHandlers.deleteOrganizacao(req, res));

  app.delete("/login/:id_login?", (req, res) => requestHandlers.deleteLogin(req, res));

  /* */

  app.get("/api/types", (req, res) => {
    var op = {
        headers: {
            'API_KEY': process.env.APIAnimalBreed_KEY,
            "Content-Type": "application/json"
        }
    }
    axios.get('http://animalbreedapi.herokuapp.com/api/types', op).then(response => res.send(response.data));
});

app.get("/api/breeds", (req, res) => {
    var op = {
        headers: {
            'API_KEY': process.env.APIAnimalBreed_KEY,
            "Content-Type": "application/json"
        }
    }
    axios.get('http://animalbreedapi.herokuapp.com/api/breeds', op).then(response => res.send(response.data));
}); 

  function authenticateToken(req, res, next) {
    const authtoken = req.headers.authorization_token;
    if (authtoken == null)
        return res.status(403);
    jwt.verify(authtoken, process.env.API_TOKEN, (err, decoded) => {
        if (err)
            return res.status(401);
        req.user = decoded.name;
        next();
    });
}

function prettyFyJson(content, statusCode){
    return {content: content, statusCode: statusCode};
}


  app.post('/login', (req, res, next) => {
    console.log(req.body.usuario_nome);
    console.log(req.body.usuario_senha);
    if (req.body.usuario_nome === 'Ryan' && req.body.usuario_senha === '123') {
        const id = 1;
        const token = jwt.sign({ id }, 'palavrasecreta', {
            expiresIn: 300       
        });
        return res.json({ auth: true, token: token });
    }
    res.status(500).json({ message: 'Invalid Login.' });
})

function verifyJWT(req, res, next) {
    const token = req.headers['x-access-token'];
    if (!token) return res.status(401).json({ auth: false, message: 'No token provided.' });
    jwt.verify(token, 'palavrasecreta', function (err, decoded) {
        if (err) return res.status(500).json({ auth: false, message: 'Failed toauthenticate token.' });    
        req.userId = decoded.id; next();
    });
}

function prettyJSON(response, responseTime) {
    return {
        "response": response,
        "res_size": response.length,
        "res_time": responseTime + "ms"
    }
}

app.get('/usuarios', verifyJWT, (req, res, next) => { console.log("Retornou todos os usuarios!");    res.json([{id:1,nome:'Ryan'}]);})


app.post("/usuario", (req, res) => {

    console.log(req.body.nome);
    console.log(req.body.email);
    console.log(req.body.morada);
    console.log(req.body.idade);
    console.log(req.body.telefone);
    console.log(req.body.sexo);
    console.log(req.body.nomeUsuario);
    console.log(req.body.senha);


    if (req.body.nome == undefined || req.body.email == undefined || req.body.morada == undefined ||
        req.body.idade == undefined || req.body.telefone == undefined ||
        req.body.sexo == undefined || req.body.nomeUsuario == undefined || req.body.senha == undefined) {
       res.send("Undefined");
   }
    else {
        let sqlquery =  `Insert into usuario(nome, email, morada, idade, telefone, sexo, nome_usuario, senha) values ("${req.body.nome}", "${req.body.email}", "${req.body.morada}", "${req.body.idade}", "${req.body.telefone}", "${req.body.sexo}", "${req.body.nomeUsuario}", "${req.body.senha}")`;
        db.query(sqlquery, (err, result) => {
            try{
                if (err) throw err;
                res.send(prettyFyJson("Usuario criado!")); 
            }catch(e){
                res.send(prettyFyJson("Erro na criação do Usuario!", e.erro));
            }
        })
    }
});

app.post("/animal", (req, res) => {

    console.log(req.body.tipo);
    console.log(req.body.raca);
    console.log(req.body.cor);
    console.log(req.body.idade);
    console.log(req.body.sexo);
    console.log(req.body.localidade);
   
    if (req.body.tipo== undefined || req.body.raca == undefined || req.body.cor == undefined,
        req.body.idade == undefined || req.body.sexo == undefined || req.body.localidade == undefined) {
        res.send("Undefined");
    }
    else {
        let sqlquery =  `INSERT INTO animal (tipo,raca,cor,idade,sexo,localidade) values ("${req.body.tipo}", "${req.body.raca}", "${req.body.cor}", "${req.body.idade}", "${req.body.sexo}", "${req.body.localidade}")`;
        db.query(sqlquery, (err, result) => {
            try{
                if (err) throw err;
                res.send(prettyFyJson("Animal criado!")); 
            }catch(e){
                res.send(prettyFyJson("Erro na criação do Animal!", e.error));
            }
        })
    }
});

app.post("/organizacao", (req, res) => {
    console.log(req.body.nomeOrganizacao);
    console.log(req.body.localidadeOrg);

    if (req.body.nomeOrganizacao == undefined || req.body.localidadeOrg == undefined) {
                    res.send("Undefined");
                }
    else {
        let sqlquery =  `INSERT INTO organização (nome_organizacao,localidade_organizacao) values ("${req.body.nomeOrganizacao}", "${req.body.localidadeOrg}")`;
        db.query(sqlquery, (err, result) => {
            try{
                if (err) throw err;
                res.send(prettyFyJson("Organização criada!")); 
            }catch(e){
                res.send(prettyFyJson("Erro na criação da organização!", e.error));
            }        
        })
    }
});

