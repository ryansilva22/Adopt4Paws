const mysql = require('mysql');

function getUsuario(req, res) {
    var connection = mysql.createConnection(options);
    console.log(options);
    connection.connect();
    var query = "SELECT id_usuario AS 'Id', nome AS 'Nome', email AS 'email', morada AS 'morada', idade AS 'idade', telefone AS 'telefone', sexo AS 'sexo', nome_usuario AS 'Nome Usuário', senha AS 'senha' FROM usuario";
   
    connection.query(query, function (err, rows) {
        if (err) {
            res.json({"message": "error", "error": err });
        } else {
            res.json({"message": "success", "usuario": rows });
        }
    });
}
module.exports.getUsuario = getUsuario;

function getAnimal(req, res) {
    var connection = mysql.createConnection(options);
    console.log(options);
    connection.connect();
    var query = "SELECT id_animal AS 'Id', tipo AS 'Tipo', raca AS 'Raça', cor AS 'Cor', idade AS 'idade', sexo AS 'sexo', localidade AS 'localidade' FROM animal";
   
    connection.query(query, function (err, rows) {
        if (err) {
            res.json({"message": "error", "error": err });
        } else {
            res.json({"message": "success", "usuario": rows });
        }
    });
}
module.exports.getAnimal = getAnimal;

function getOrganizacao(req, res) {
    var connection = mysql.createConnection(options);
    console.log(options);
    connection.connect();
    var query = "SELECT id_animal AS 'Id', tipo AS 'Tipo', raca AS 'Raça', cor AS 'Cor', idade AS 'idade', sexo AS 'sexo', localidade AS 'localidade' FROM animal";
   
    connection.query(query, function (err, rows) {
        if (err) {
            res.json({"message": "error", "error": err });
        } else {
            res.json({"message": "success", "usuario": rows });
        }
    });
}
module.exports.getOrganizacao = getOrganizacao;

function postUsuario(req,res) {


}


function putUsuario(req, res) {
    let connection = mysql.createConnection(options);
    let nome = req.body.nome;
    let email = req.body.email;
    let morada = req.body.morada;
    let idade = req.body.idade;
    let telefone = req.body.telefone;
    let sexo = req.body.sexo;
    let nome_usuario = req.body.nome_usuario;
    let senha = req.body.senha;

    let sql = "UPDATE usuario SET nome= ?,email= ?,morada= ?,idade= ?,telefone= ?,sexo= ?,nome_usuario= ?, senha=?, WHERE id_usuario= ?"; 
    connection.connect(function (err) {
        if (err) throw err;
        connection.query(sql, [nome, email, morada, idade, telefone, sexo, nome_usuario,,senha, req.params.id_usuario], function (err, rows) {
            if (err) {
                res.sendStatus(500);
            } else {
                connection.query("Select id_usuario, email, morada, idade, telefone, sexo, nome_usuario, senha FROM Usuario where id_usuario = ?", [req.params.id_usuario], (err, result) => {
                    res.send(result)
                })
            }
        });
    });
}
module.exports.putUsuario = putUsuario;

function putAnimal(req, res) {
    let connection = mysql.createConnection(options);
    let tipo = req.body.tipo;
    let raca = req.body.raca;
    let cor = req.body.cor;
    let idade = req.body.idade;
    let sexo = req.body.sexo;
    let localidade = req.body.localidade;

    let sql = "UPDATE animal SET tipo= ?,raca= ?,cor= ?,idade= ?,sexo= ?,localidade =?, WHERE id_animal= ?"; 
    connection.connect(function (err) {
        if (err) throw err;
        connection.query(sql, [tipo,raca,cor,idade,sexo,localidade, req.params.id_animal], function (err, rows) {
            if (err) {
                res.sendStatus(500);
            } else {
                connection.query("Select id_animal, tipo, raca, cor, idade, sexo, localidade FROM animal where id_animal = ?", [req.params.id_animal], (err, result) => {
                    res.send(result)
                })
            }
        });
    });
}
module.exports.putAnimal = putAnimal;

function putOrganizacao(req, res) {
    let connection = mysql.createConnection(options);
    let nome = req.body.nome_organizacao;
    let localidade= req.body.localidade;


    let sql = "UPDATE organizacao SET nome= ?, localidade =?, WHERE id_organizacao= ?"; 
    connection.connect(function (err) {
        if (err) throw err;
        connection.query(sql, [nome,localidade, req.params.id_organizacao], function (err, rows) {
            if (err) {
                res.sendStatus(500);
            } else {
                connection.query("Select id_organizacao,nome, localidade FROM Usuario where id_organizacao = ?", [req.params.id_organizacao], (err, result) => {
                    res.send(result)
                })
            }
        });
    });
}
module.exports.putOrganizacao = putOrganizacao;

function deleteUsuario(req, res) {
    let query = 'DELETE FROM usuario WHERE id_usuario = ?';
    let connection = mysql.createConnection(options);
    connection.connect(function (err) {
        if (err) throw err;
        connection.query(query, [req.params.id_usuario], function (err) {
            if (err) {
                res.sendStatus(404);
            } else {
                res.sendStatus(200);
            }
        });
    });
}

module.exports.deleteUsuario = deleteUsuario;

function deleteAnimal(req, res) {
    let query = 'DELETE FROM animal WHERE id_animal= ?';
    let connection = mysql.createConnection(options);
    connection.connect(function (err) {
        if (err) throw err;
        connection.query(query, [req.params.id_animal], function (err) {
            if (err) {
                res.sendStatus(404);
            } else {
                res.sendStatus(200);
            }
        });
    });
}

module.exports.deleteAnimal = deleteAnimal;

function deleteOrganizacao(req, res) {
    let query = 'DELETE FROM usuario WHERE id_organizacao = ?';
    let connection = mysql.createConnection(options);
    connection.connect(function (err) {
        if (err) throw err;
        connection.query(query, [req.params.id_organizacao], function (err) {
            if (err) {
                res.sendStatus(404);
            } else {
                res.sendStatus(200);
            }
        });
    });
}

module.exports.deleteOrganizacao = deleteOrganizacao;
