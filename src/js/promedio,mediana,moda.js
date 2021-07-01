// const lista1 = [
//     100,
//     200,
//     300,
//     500,
// ];
// let sumaLista1 = 0;

// for (let i = 0; i < lista1.length; i++) {
//     sumaLista1 = sumaLista1 + lista1[i];
//   }

// const sumaLista = lista

// const promedio = sumaLista1 / lista1.length;

// const calcMediaAritmetica = (lista) => {
//   let sumaLista = 0;
//   for (let i = 0; i< lista.length; i++) {
//       sumaLista = sumaLista + lista[i];
//   }
// const sumaLista = lista.reduce(
//     function (valorAcumulado = 0, nuevoElemento) {
//        return valorAcumulado + nuevoElemento;
//     }
// )
//   const promedioLista = sumaLista / lista.length;

//   return promedioLista;
// }


          // mediana

//           function calcMediaAritmetica(listaOrdenada) {
//             const sumaLista = listaOrdenada.reduce(
//               function (valorAcumulado = 0, nuevoElemento) {
//                 return valorAcumulado + nuevoElemento;
//               }
//             );
//             const promedioLista = sumaLista / lista.length;
//             return promedioLista;
//           }
// const lista = [
//   500,
//   // 600,
//   400000000,
//   200,
//   100,
//   300,
//   50,
// ];
// let listaOrdenada = lista.sort((a,b) => {
//   return a-b;
// })

// const mitadLista = parseInt(listaOrdenada.length / 2);

// let mediana;
// function esPar(n){
//   if (n % 2 === 0){
//     return true;
//   }else{
//   return false;
// }
// }
// if (esPar(listaOrdenada.length)){
//  const element1 = listaOrdenada[mitadLista];
//  const element2 = listaOrdenada[mitadLista - 1];

//  const promedioElem1Elem2 = calcMediaAritmetica([
//    element1,
//    element2,
//  ]);

//  mediana = promedioElem1Elem2;
// } 
// else{
//   mediana = listaOrdenada[mitadLista];
// }

                // MODA

const lista2 =  [
  1,2,3,1,2,3,4,2,2,2,1,
]
const lista1Count = {};

lista2.map(
  (element) => {
    if(lista1Count[element]){
      lista1Count[element] += 1;
    }else {
      lista1Count[element] = 1
    }
  })

lista1Arr = Object.entries(lista1Count).sort((a,b)=>{
    return a[1] - b[1];
})

const moda = lista1Arr[lista1Arr.length -1];

