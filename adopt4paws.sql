drop database if exists adopt4paws;
create database adopt4paws;
use adopt4paws;

create table usuario (
id_usuario int NOT NULL AUTO_INCREMENT,
nome varchar(50) NOT NULL,
email varchar(50) NOT NULL,
morada varchar(50) NOT NULL,
idade tinyint NOT NULL,
telefone varchar(15) NOT NULL,
sexo varchar(10) NOT NULL,
nome_usuario varchar(20) NOT NULL,
senha varchar(25) NOT NULL,
PRIMARY KEY(id_usuario)
);

INSERT INTO usuario( nome, email, morada, idade, telefone, sexo, nome_usuario, senha)VALUES('Ryan Silva', 'ryan@gmail.com', 'Avenida Pedro Nunes', '19','12345','Masculino', 'Ryan', '123');
INSERT INTO usuario( nome, email, morada, idade, telefone, sexo, nome_usuario, senha)VALUES('Carlos Carmos', 'carlos@gmail.com', 'Avenida Gomes', '20','12345','Masculino', 'Carlos', '1234');

create table animal(
id_animal int NOT NULL AUTO_INCREMENT,
tipo varchar(15) NOT NULL,
raca varchar(15) NOT NULL,
cor varchar(15) NOT NULL,
idade tinyint NOT NULL,
sexo varchar(10) NOT NULL,
localidade varchar (20) NOT NULL,
PRIMARY KEY (id_animal)
);

INSERT INTO animal(tipo,raca,cor,idade,sexo,localidade) VALUES('Cachorro','Pug','Preto','3','Masculino','Montijo');


create table organização(
id_organizacao int NOT NULL AUTO_INCREMENT,
nome_organizacao varchar(15) NOT NULL,
localidade_organizacao varchar(20) NOT NULL,
PRIMARY KEY (id_organizacao)
);

INSERT INTO organização( nome_organizacao,localidade_organizacao)VALUES("PetShop","Montijo");


create table Login_Usuario
(
id_login int NOT NULL AUTO_INCREMENT,
usuario_nome varchar(50) not null,
usuario_senha varchar(50) not null,
id_Usuario int not null,
PRIMARY KEY(id_login),
FOREIGN KEY (id_Usuario) REFERENCES usuario(id_usuario)
);

insert into Login_Usuario(usuario_nome, usuario_senha,id_Usuario) values('Ryan', '123', 1);

