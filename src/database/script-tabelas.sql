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
nomeBando varchar(50)
);

create table Pirata(
idPirata int auto_increment,
nomePirata varchar(50),
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

insert into Usuario values
(null,'Marcos Henrique','marcos.silva@gmail.com','marcos1234');

-- chapeus de palha

insert into Bando(nomeBando)values
('Chapéu de Palha');

insert into Pirata(nomePirata,fkBando,caminhoImagem) values
('Monkey D. Luffy',1,'../../assets/cards/chapeusDePalha/Luffy.png'),
('Roronoa Zoro',1,'../../assets/cards/chapeusDePalha/Zoro.png'),
('Sanji',1,'../../assets/cards/chapeusDePalha/Sanji.png'),
('Jinbe',1,'../../assets/cards/chapeusDePalha/Jinbe.png'),
('Nico Robin',1,'../../assets/cards/chapeusDePalha/Nico Robin.png'),
('Nami',1,'../../assets/cards/chapeusDePalha/Nami.png'),
('Tony T. Chopper',1,'../../assets/cards/chapeusDePalha/Chopper.png'),
('Franky',1,'../../assets/cards/chapeusDePalha/Franky.png'),
('Usopp',1,'../../assets/cards/chapeusDePalha/Usopp.png'),
('Brook',1,'../../assets/cards/chapeusDePalha/Brook.png');

-- piratas heart

insert into Bando(nomeBando)values
('Piratas Heart');
insert into Pirata(nomePirata,fkBando,caminhoImagem) values
('Trafalgar D. Water Law',2,'../../assets/cards/heart/Tragalfar Law.png'),
('Bepo',2,'../../assets/cards/heart/Bepo.png');

-- marinha

insert into Bando(nomeBando)values
('Marinha');
insert into Pirata(nomePirata,fkBando,caminhoImagem) values
('Akainu',3,'../../assets/cards/marinha/Akainu.png'),
('Kizaru',3,'../../assets/cards/marinha/Kizaru.png'),
('Aokiji',3,'../../assets/cards/marinha/Aokiji.png'),
('Fujitora',3,'../../assets/cards/marinha/Fujitora.png'),
('Garp',3,'../../assets/cards/marinha/Garp.png'),
('Kobe',3,'../../assets/cards/marinha/Kobe.png'),
('Tashigi',3,'../../assets/cards/marinha/Tashigi.png'),
('Smoker',3,'../../assets/cards/marinha/Smoker.png');

-- big mom
insert into Bando(nomeBando)values
('Piratas Big Mom');
insert into Pirata(nomePirata,fkBando,caminhoImagem) values
('Charlotte Linlin',4,'../../assets/cards/bigMom/Big Mom.png');
update Pirata set nomePirata = 'Big Mom' where idPirata = 22;
update Pirata set nomePirata = 'Trafalgar Law' where idPirata = 12;

select * from Pirata;

select * from Pirata join Bando on fkBando = idBando;

desc Deck;

insert into Deck (fkPirata,fkBando,fkUsuario) values
(1,1,1),
(2,1,1),
(3,1,1);

select * from Pirata join Bando on Pirata.fkBando = Bando.idBando join Deck on Deck.fkPirata = Pirata.idPirata join Usuario on fkUsuario = idUsuario where Usuario.idUsuario = 1;
