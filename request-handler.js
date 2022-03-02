const { json } = require('express/lib/response');
const mysql = require('mysql');
require("dotenv").config();

let options = {
    "host": process.env.host,
    "user": process.env.user,
    "database": process.env.database,
    "password": process.env.password
}

/*Get Usuario */

function getUsuario(req, res) {
    var connection = mysql.createConnection(options);
    console.log(options);
    connection.connect();
    var query = "SELECT id_usuario AS 'Id', nome AS 'Nome', email AS 'email', morada AS 'morada', idade AS 'idade',telefone AS 'telefone', sexo AS 'sexo', nome_usuario AS 'Nome_Usuario', senha AS 'senha' FROM usuario ";
   
    if (req.params.id_usuario) {
        query += "where id_usuario = " + req.params.id_usuario;
    }
    connection.query(query, function (err, rows) {
        if (err) {
            res.json({"message": "error", "error": err });
        } else {
            res.json({"message": "success", "usuarios": rows });
        }
    });
}
module.exports.getUsuario = getUsuario;

/*Get Usuario ASC */

function getUsuarioAsc(req, res) {
    var connection = mysql.createConnection(options);
    connection.connect();
    var query = "SELECT id_usuario AS 'Id', nome AS 'Nome', email AS 'email', morada AS 'morada', idade AS 'idade',telefone AS 'telefone', sexo AS 'sexo', nome_usuario AS 'Nome_Usuario', senha AS 'senha' FROM usuario order by id_usuario ASC";
    connection.query(query, function (err, rows) {
        if (err) {
            res.json({ "message": "error", "error": err });
        } else {
            res.json({ "message": "success", "usuarios": rows });
        }
    });
}
module.exports.getUsuarioAsc = getUsuarioAsc;

/* Get Usuario DESC */

function getUsuarioDesc(req, res) {
    var connection = mysql.createConnection(options);
    connection.connect();
    var query = "SELECT id_usuario AS 'Id', nome AS 'Nome', email AS 'email', morada AS 'morada', idade AS 'idade',telefone AS 'telefone', sexo AS 'sexo', nome_usuario AS 'Nome_Usuario', senha AS 'senha' FROM usuario order by id_usuario DESC";
    connection.query(query, function (err, rows) {
        if (err) {
            res.json({ "message": "error", "error": err });
        } else {
            res.json({ "message": "success", "usuarios": rows });
        }
    });
}
module.exports.getUsuarioDesc = getUsuarioDesc;

/*Get Animal */

function getAnimal(req, res) {
    var connection = mysql.createConnection(options);
    console.log(options);
    connection.connect();
    var query = "SELECT id_animal AS 'Id', tipo AS 'Tipo', raca AS 'Raca', cor AS 'Cor', idade AS 'idade', sexo AS 'sexo', localidade AS 'localidade' FROM animal ";
   
    if (req.params.id_animal) {
        query += "where id_animal = " + req.params.id_animal;
    }
    connection.query(query, function (err, rows) {
        if (err) {
            res.json({"message": "error", "error": err });
        } else {
            res.json({"message": "success", "animais": rows });
        }
    });
}
module.exports.getAnimal = getAnimal;

function getAnimalTipoDog(req, res) {
    var connection = mysql.createConnection(options);
    connection.connect();
    var query = "SELECT id_animal AS 'Id', tipo AS 'Tipo', raca AS 'Raca', cor AS 'Cor', idade AS 'idade', sexo AS 'sexo', localidade AS 'localidade' FROM animal where tipo = 'Cachorro' ";
    connection.query(query, function (err, rows) {
        if (err) {
            res.json({ "message": "error", "error": err });
        } else {
            res.json({ "message": "success", "animais": rows });
        }
    });
}
module.exports.getAnimalTipoDog = getAnimalTipoDog;

function getAnimalTipoCat(req, res) {
    var connection = mysql.createConnection(options);
    connection.connect();
    var query = "SELECT id_animal AS 'Id', tipo AS 'Tipo', raca AS 'Raca', cor AS 'Cor', idade AS 'idade', sexo AS 'sexo', localidade AS 'localidade' FROM animal where tipo = 'Gato' ";
    connection.query(query, function (err, rows) {
        if (err) {
            res.json({ "message": "error", "error": err });
        } else {
            res.json({ "message": "success", "animais": rows });
        }
    });
}
module.exports.getAnimalTipoCat = getAnimalTipoCat;


function getAnimalMenor5anos(req, res) {
    var connection = mysql.createConnection(options);
    connection.connect();
    var query = "SELECT id_animal AS 'Id', tipo AS 'Tipo', raca AS 'Raca', cor AS 'Cor', idade AS 'idade', sexo AS 'sexo', localidade AS 'localidade' FROM animal where idade <= 5";
    connection.query(query, function (err, rows) {
        if (err) {
            res.json({ "message": "error", "error": err });
        } else {
            res.json({ "message": "success", "animais": rows });
        }
    });
}
module.exports.getAnimalMenor5anos = getAnimalMenor5anos;

function getAnimalMenor10anos(req, res) {
    var connection = mysql.createConnection(options);
    connection.connect();
    var query = "SELECT id_animal AS 'Id', tipo AS 'Tipo', raca AS 'Raca', cor AS 'Cor', idade AS 'idade', sexo AS 'sexo', localidade AS 'localidade' FROM animal where idade <= 10";
    connection.query(query, function (err, rows) {
        if (err) {
            res.json({ "message": "error", "error": err });
        } else {
            res.json({ "message": "success", "animais": rows });
        }
    });
}
module.exports.getAnimalMenor10anos = getAnimalMenor10anos;

function getAnimalMaior10anos(req, res) {
    var connection = mysql.createConnection(options);
    connection.connect();
    var query = "SELECT id_animal AS 'Id', tipo AS 'Tipo', raca AS 'Raca', cor AS 'Cor', idade AS 'idade', sexo AS 'sexo', localidade AS 'localidade' FROM animal where idade >= 10";
    connection.query(query, function (err, rows) {
        if (err) {
            res.json({ "message": "error", "error": err });
        } else {
            res.json({ "message": "success", "animais": rows });
        }
    });
}
module.exports.getAnimalMaior10anos = getAnimalMaior10anos;

/*GET Animal Masculino */

function getAnimalMasculino(req, res) {
    var connection = mysql.createConnection(options);
    connection.connect();
    var query = "SELECT id_animal AS 'Id', tipo AS 'Tipo', raca AS 'Raca', cor AS 'Cor', idade AS 'idade', sexo AS 'sexo', localidade AS 'localidade' FROM animal where sexo = 'Masculino' ";
    connection.query(query, function (err, rows) {
        if (err) {
            res.json({ "message": "error", "error": err });
        } else {
            res.json({ "message": "success", "animais": rows });
        }
    });
}
module.exports.getAnimalMasculino = getAnimalMasculino;

/*GET Animal Feminino */

function getAnimalFeminino(req, res) {
    var connection = mysql.createConnection(options);
    connection.connect();
    var query = "SELECT id_animal AS 'Id', tipo AS 'Tipo', raca AS 'Raca', cor AS 'Cor', idade AS 'idade', sexo AS 'sexo', localidade AS 'localidade' FROM animal where sexo = 'Feminino' ";
    connection.query(query, function (err, rows) {
        if (err) {
            res.json({ "message": "error", "error": err });
        } else {
            res.json({ "message": "success", "animais": rows });
        }
    });
}
module.exports.getAnimalFeminino = getAnimalFeminino;

/*Get Organizacao */

function getOrganizacao(req, res) {
    var connection = mysql.createConnection(options);
    console.log(options);
    connection.connect();
    var query = "SELECT id_organizacao AS 'Id', nome_organizacao as 'Nome', localidade_organizacao AS 'localidade' FROM organização ";
   
    if (req.params.id_organizacao) {
        query += "where id_organizacao = " + req.params.id_organizacao;
    }
    connection.query(query, function (err, rows) {
        if (err) {
            res.json({"message": "error", "error": err });
        } else {
            res.json({"message": "success", "organizacoes": rows });
        }
    });
}
module.exports.getOrganizacao = getOrganizacao;

/*Get Login */

function getLogin(req, res) {
    var connection = mysql.createConnection(options);
    connection.connect();
    var query = "SELECT id_login AS 'Id', usuario_nome AS 'Nome_Usuario', usuario_senha AS 'Senha', id_Usuario AS 'Id_Usuario' FROM Login_Usuario ";

    if (req.params.id_login) {
        query += "where id_login = " + req.params.id_login;
    }

    connection.query(query, function (err, rows) {
        if (err) {
            res.json({ "message": "error", "error": err });
        } else {
            res.json({ "message": "success", "logins": rows });
        }
    });
}
module.exports.getLogin = getLogin;



/*Put Usuario */

function putUsuario(req, res) {

    let id_usuario = req.body.id_usuario;
    let connection = mysql.createConnection(options);
    let nome = req.body.nome;
    let email = req.body.email;
    let morada = req.body.morada;
    let idade = req.body.idade;
    let telefone = req.body.telefone;
    let sexo = req.body.sexo;
    let nome_usuario = req.body.nome_usuario;
    let senha = req.body.senha;

    let sql = "UPDATE `usuario` SET `nome`= ?,`email`= ?,`morada`= ?,`idade`= ?,`telefone`= ?,`sexo`= ?,`nome_usuario`= ?, `senha`=?, WHERE `id_usuario`= ?"; 
    
    connection.connect(function (err) {
        if (err) throw err;
        connection.query(sql, [nome, email, morada, idade, telefone, sexo, nome_usuario,senha, id_usuario], function (err, rows) {
            if (err) {
                res.sendStatus(500);
            } else {
                connection.query("Select `id_usuario`, `email`, `morada`, `idade`, `telefone`, `sexo`, `nome_usuario`, `senha` FROM `usuario` where `id_usuario` = ?", [req.params.id_usuario], (err, result) => {
                    res.send(result)
                })
            }
        });
    });
}
module.exports.putUsuario = putUsuario;

/*Put Animal */

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

/*Put Organizacao */

function putOrganizacao(req, res) {
    let connection = mysql.createConnection(options);
    let nome = req.body.nome_organizacao;
    let localidade= req.body.localidade;


    let sql = "UPDATE organizacao SET nome_organizacao= ?, localidade_organizacao =?, WHERE id_organizacao= ?"; 
    connection.connect(function (err) {
        if (err) throw err;
        connection.query(sql, [nome,localidade, req.params.id_organizacao], function (err, rows) {
            if (err) {
                res.sendStatus(500);
            } else {
                connection.query("Select id_organizacao,nome_organizacao, localidade_organizacao FROM Usuario where id_organizacao = ?", [req.params.id_organizacao], (err, result) => {
                    res.send(result)
                })
            }
        });
    });
}
module.exports.putOrganizacao = putOrganizacao;

/*Delete Usuario */

function deleteUsuario(req, res) {
    let query = 'DELETE FROM usuario WHERE id_usuario = ?';
    let connection = mysql.createConnection(options);
    connection.connect(function (err) {
        if (err) throw err;
        connection.query(query, [req.params.id_usuario], function (err) {
            if (err) {
                res.json({"message": "error", err});
            } else {
                res.json({"message": "Sucesso", err});
            }
        });
    });
}

module.exports.deleteUsuario = deleteUsuario;

/*Delete Animal*/

function deleteAnimal(req, res) {
    let query = 'DELETE FROM animal WHERE id_animal= ?';
    let connection = mysql.createConnection(options);
    connection.connect(function (err) {
        if (err) throw err;
        connection.query(query, [req.params.id_animal], function (err) {
            if (err) {
                res.json({"message": "error", err});
            } else {
                res.json({"message": "Sucesso", err});
            }
        });
    });
}

module.exports.deleteAnimal = deleteAnimal;

/*Delete Organizacao */

function deleteOrganizacao(req, res) {
    
    let query = 'DELETE FROM organização WHERE id_organizacao = ?';
    let connection = mysql.createConnection(options);
    connection.connect(function (err) {
        if (err) throw err;
        connection.query(query, [req.params.id_organizacao], function (err) {
            if (err) {
                res.json({"message": "error", err});
            } else {
                res.json({"message": "Sucesso", err});
            }
        });
    });
}

module.exports.deleteOrganizacao = deleteOrganizacao;

/*Delete Login */

function deleteLogin(req, res) {
    let query = 'DELETE FROM Login_Usuario WHERE id_login = ?';
    let connection = mysql.createConnection(options);
    connection.connect(function (err) {
        if (err) throw err;
        connection.query(query, [req.params.id_login], function (err) {
            if (err) {
                res.json({"message": "error", err});
            } else {
                res.json({"message": "Sucesso", err});
            }
        });
    });
}

module.exports.deleteLogin = deleteLogin;
