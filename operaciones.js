const fs = require('fs');

const registrar = (nombre, edad, tipo, color, enfermedad ) =>{
    let citas = JSON.parse(fs.readFileSync('citas.json', 'utf-8'));
    citas.push({nombre, edad, tipo, color, enfermedad});
    fs.writeFileSync('citas.json', JSON.stringify(citas));
}
const leer = () =>{
    let citas = JSON.parse(fs.readFileSync('citas.json', 'utf-8'));
    if(citas.length===0){
        console.log('=== === === === === === === === === ===')
        console.log('=== === === === === === === === === ===')
        console.log('No hay citas registradas');
        console.log('=== === === === === === === === === ===')
        console.log('=== === === === === === === === === ===')
        return
    }
    else{
        console.log('=== === === LEYENDO CITAS === === ===');
        console.log('=== === === === === === === === === ===')
        console.log('=== === === === === === === === === ===')
        console.log(citas);
        return
    }
    
}
module.exports = {registrar, leer}