const http = require('http');

function router (req,res) {
    console.log('nueva petición');
    console.log(req.url);

    switch(req.url)
    {
        case'/hola':
        res.write('Hola, que tal');
        res.end();
        break;
        default:
            res.write('Error 404: No se lo que quieres');
            res.end();
    }
    //escribir respuesta al usuario
    // res.writeHead(201, {'Content-Type': 'text/plain'});
    // res.write('Hola, ya se usar HTTP de NodeJS');

    // res.end();//finalizar petición
}

http.createServer(router).listen(3000); //puerto 3000

console.log('Escuchando http en el puerto 3000');



