const NOTA_MIN = 1;
const NOTA_MAX = 10;
const NM_NOMBRE = "Matemática";
const NL_NOMBRE = "Lengua";
const NE_NOMBRE = "EFSI";
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
    let promedio;
    let sumaNotas;

    if (comprobarNotasValidas())
    {
        sumaNotas = Number(notaMatematica.value) + Number(notaLengua.value) + Number(notaEFSI.value);
        promedio = sumaNotas / 3;
        resultado.innerText = "Promedio: " + promedio;
    }
}

function mostrarMateriaMayorNota() {
    let notaMaxNum;
    let notaMaxNombre = "";
    let nMValue, nLValue, nEValue;

    if (comprobarNotasValidas()) {
        nMValue = Number(notaMatematica.value);
        nLValue = Number(notaLengua.value);
        nEValue = Number(notaEFSI.value);

        notaMaxNum = Math.max(nMValue, nLValue, nEValue);

        if (nMValue === notaMaxNum)
            notaMaxNombre += NM_NOMBRE + " ";
        if (nLValue === notaMaxNum)
            notaMaxNombre += NL_NOMBRE + " ";
        if (nEValue === notaMaxNum)
            notaMaxNombre += NE_NOMBRE + " ";

        resultado.innerText = `Nota(s) más alta es de ${notaMaxNombre}(${notaMaxNum})`;
    }
}