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

create table organizacao(
id_organizacao int NOT NULL AUTO_INCREMENT,
nome_organizacao varchar(15) NOT NULL,
localidade varchar(20) NOT NULL,
PRIMARY KEY (id_organizacao)
);
