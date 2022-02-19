//const fs = require('fs');
import fs from fs;

console.clear();
const base = 3;

let data ='';
for (let i = 0; i <= 10; i++) {
    data += `${base} * ${i} = ${base * i}\n`;
}

fs.writeFile("./test.txt", data, function (err) {
    (err)
        ?console.log(err)
        :console.log("El archivo fue guardado!\n");
});

fs.readFile('./test.txt', 'utf8', (err, data) => {
    (err)
        ? console.log(err)
        : console.log(`Datos:\n${data}`);
});

