function hola(nombre, micallback){
    setTimeout(function(){
        console.log('Hola, '+nombre);
        micallback(nombre);
    },1500);
}

function hablar(callbackHablar) {
    setTimeout(function(){
        console.log('bla bla bla bla...');
        callbackHablar();
    }, 1000)
}

function adios(nombre, otroCallback){
    setTimeout(function(){
        console.log('Adios', nombre)
        otroCallback();
    },1000);
}
function conversacion(nombre, veces, callback){
    if(veces >0)
    {
        hablar(function(){
            conversacion(nombre, --veces, callback);
        });
    } else{
        adios(nombre, callback);
    }
}

console.log('Iniciando Proceso...');

hola('Fabricio', function(nombre){
    conversacion(nombre, 3, function(){
        console.log('Proceso Terminado');
    })
});

// hola('Fabricio',function(nombre){
//     hablar(function(){
//         hablar(function(){
//             adios(nombre, function(){
//                 console.log('Terminando proceso....');
//         })}
//         )
//     })
    
    
// });

