const argumentos = process.argv.slice(2);
const {registrar,leer} = require('./operaciones');
if(argumentos[0]==='leer'){
    const {leer} = require('./operaciones');
    leer();
}
else if
    (argumentos[0]==='registrar'){
    if(argumentos.length<6){
        console.log('Faltan argumentos');
        return;
    }
    else{
        registrar(argumentos[1], argumentos[2], argumentos[3], argumentos[4], argumentos[5]);
        console.log('Cita registrada');
    }
    
}
else{
    console.log('Nombre de función incorrecto');
}
