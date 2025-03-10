const NOTA_MIN = 1;
const NOTA_MAX = 10;
const resultado = document.getElementById("resultado");
const notaMatematica = document.getElementById("notaMatematica");
const notaLengua = document.getElementById("notaLengua");
const notaEFSI = document.getElementById("notaEFSI");

function comprobarNotasValidas() {
    const notasValidas = !isNaN(notaMatematica.value) && !isNaN(notaLengua.value) && !isNaN(notaEFSI.value)
        && notaMatematica.value >= NOTA_MIN && notaLengua.value >= NOTA_MIN && notaEFSI.value >= NOTA_MIN
        && notaMatematica.value <= NOTA_MAX && notaLengua.value <= NOTA_MAX && notaEFSI.value <= NOTA_MAX;

    if (!notasValidas)
        alert(`Ingrese números validos entre ${NOTA_MIN}-${NOTA_MAX}`);

    return notasValidas;
}

function calcularPromedio() {
    let sumaNotas = parseInt(notaMatematica.value) + parseInt(notaLengua.value) + parseInt(notaEFSI.value);
    let comprobarNotas;
    let promedio;
    
    
    if (comprobarNotasValidas())
    {
        promedio = sumaNotas / 3;
        resultado.innerText = "Promedio: " + promedio;
    }
}