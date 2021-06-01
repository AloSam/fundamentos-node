const os = require('os');
// console.log(os.arch()); //arquitectura
// console.log(os.platform()); //plataforma win32
// console.log(os.cpus().length); //nucleos y cpus
// console.log(os.constants); //constantes
const SIZE = 1024;
function kb(bytes) {return bytes/SIZE}
function mb(bytes) {return kb(bytes)/SIZE}
function gb(bytes) {return mb(bytes)/SIZE}
// console.log(os.freemem());
// console.log(gb(os.freemem())); //memoria disponible

// console.log(gb(os.totalmem())); //memoria total

// console.log(os.homedir()); //directorio home
// console.log(os.tmpdir()); //directorio home

// console.log(os.hostname()); //para saber el nombre host de la maquina

console.log(os.networkInterfaces());




