
//solo puedes tener un export default
//no se puede export default a una funcion o variable expresada
/*esto porque default utiliza inmediatamente el export, mientras que las no default se elevan y despues se exportan*/
//si se quiere exportar una variable 
//let variable = valor;
//export default variable;
export default function saludar() {
    return 'archivo js de aritmetica'
}

function sumar(a,b) {
    return a+b;
}

function restar(a,b) {
    return a-b;
}

//export solo exporta las funciones, variables, que hayas declarado con export si se te olvida otra que querias aunque sea del mismo archivo no lo hara
function dividir(a,b) {
    return a/b;
}

export const aritmetica = {
sumar,
restar,
}