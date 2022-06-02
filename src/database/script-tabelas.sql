create database bdcrew;
use bdcrew;

create table usuario(
idUsuario int primary key auto_increment,
nome varchar(50),
email varchar(50),
senha varchar(30)
);

start transaction;


