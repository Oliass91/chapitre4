const fs = require("fs");
const path = require("path");

//Creation dossier syncone
// fs.mkdirSync(path.join(__dirname, 'test'),{},);
// console.log('Dossier test cree')

//Creation dossier Asyncone
// fs.mkdir(path.join(__dirname, 'test2'), {}, (err) => {
//     if (err) throw err;
//     console.log('Dossier test2 cree avec succes!');
// });
// console.log('Fin du programme');

//Creation de fichier dans un dossier
fs.writeFile(
    path.join(__dirname, 'test3', 'salut.txt'),
    'Salut tout le monde\n',
    err => {
        if (err) throw err;
        console.log('Fichier salut.txt cree');
    }
);
fs.appendFile(
    path.join(__dirname, 'test3', 'salut.txt'),
    'Salut tout le monde sur l\'autre ligne\n',
    err => {
        if (err) throw err;
        console.log('Fichier salut.txt cree');
    }
);
console.log('Fin du programme');