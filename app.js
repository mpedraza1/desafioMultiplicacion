//PEDIMOS EL NUMERO AL USUARIO
const  numero = parseInt(prompt("ingrese número maximo a pintar"));

//TABLAS DE MULTIPLICAR
const verificarNumero = (num) => {
    if (num >= 1 && num <= 20){
        for (let i = 1; i <= num; i++){
            console.log(`
            ${i} x ${num} = ${i * num} `);
                  
        }
    }
        else  {
           return console.log('numero fuera de rango')
            }           
        };

verificarNumero(numero);


//FACTORIAL

const factorial = (num) => {
    if (num <= 1) return 1;
    return num * factorial (num - 1);
}
        
    for (let x = 1; x <= numero ; x++) {
        console.log(`El factorial de ${x} es ${factorial(x)}`);
    }



