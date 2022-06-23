const fs = require('fs');

fs.readFile(__dirname + "/planets.txt", (error, data) =>{
    if(error) {
        return console.log(error);
    };
    console.log(data.toString());
});