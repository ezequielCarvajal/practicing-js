const salariosCol = colombia.map(
    (person) => {
       return person.salary;
    }
);

const salariosColSorted = salariosCol.sort(
    (a,b) => {
        return a - b;
    }
);

function esPar(n) {
  return (n % 2 === 0);
}
function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
      function (valorAcumulado = 0, nuevoElemento) {
        return valorAcumulado + nuevoElemento;
      }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
  }

function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2);
    if(esPar(lista.length)) {
        const personMitad = lista[mitad -1];
        const personMitad2 = lista[mitad];
        const mediana = calcularMediaAritmetica([personMitad,personMitad2]);
        return mediana;
        
    } else {
        const personMitad = lista[mitad];
        return personMitad;
    }
}

console.log(
    medianaSalarios(salariosColSorted)
);