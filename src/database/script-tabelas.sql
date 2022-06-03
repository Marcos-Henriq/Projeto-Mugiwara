create database bdcrew;
use bdcrew;

create table Usuario(
idUsuario int primary key auto_increment,
nome varchar(50),
email varchar(50),
senha varchar(30)
);

create table Bando(
idBando int primary key auto_increment,
nome varchar(50)
);

create table Pirata(
idPirata int auto_increment,
nome varchar(50),
fkBando int,
foreign key(fkBando) references Bando(idBando),
primary key(idPirata,fkBando),
caminhoImagem varchar(150)
);

create table Deck(
fkPirata int,
foreign key(fkPirata) references Pirata(idPirata),
fkBando int,
foreign key(fkBando) references Bando(idBando),
fkUsuario int,
foreign key(fkUsuario) references Usuario(idUsuario)
);

insert into Bando(nome)values
('Chapéu de Palha');

insert into Pirata(nome,fkBando,caminhoImagem) values
('Monkey D. Luffy',1,'../../assets/cards/Luffy.png'),
('Roronoa Zoro',1,'../../assets/cards/Zoro.png'),
('Sanji',1,'../../assets/cards/Sanji.png');





select * from Usuario;
