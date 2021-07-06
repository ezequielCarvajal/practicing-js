 // Cuadrado

console.group("Cuadrados");
// const ladoCaudrado = 5;
// const perimetroCuadrado = ladoCaudrado * 4 + "cm";
// const AreaCuadrado = ladoCaudrado * ladoCaudrado + "cm^2";
// console.log("Los lados del cuadrado miden " + ladoCaudrado +"cm")
// console.log("El perimetro del cuadrado es: " + perimetroCuadrado);
// console.log("El Area del cuadrado es: " + AreaCuadrado);

function perimetroCuad(lado){
    return lado * 4;
}
function AreaCuad(lado){
    return lado * lado;
}

// ------ahora si 

let input = document.getElementById("InputCuadrado");
const respuestaCuadrado = document.getElementById("respuestaCuadrado");

const calcPerimetroCuadrado = () => {
const value = input.value;
const perimetro = perimetroCuad(value);
respuestaCuadrado.innerText = `El perimetro del Cuadrado es ${perimetro}`
}

const calcAreaCuadrado = () => {
const value = input.value;
const area = AreaCuad(value);
respuestaCuadrado.innerText = `El area del Cuadrado es ${area}`
}

console.groupEnd()

// triangulo = T
console.group("Triangulo");

// const ladoT1 = 6;
// const ladoT2 = 6;
// const baseT = 4;
// const alturaT = 5.5;
// const perimetroT = ladoT1 + ladoT2 + baseT;
// const AreaT = (baseT * alturaT) / 2;

// console.log("La altura del triangulo es de: " + alturaT + "cm");
// console.log("Los lados del triangulo miden: " + ladoT1 + "cm, " + ladoT2 + "cm, " + baseT +"cm");
// console.log("El perimetro del Triangulo es: " + perimetroT + "cm");
// console.log("El Area del Triangulo es: " + AreaT + "cm^2");
const lado1 = document.getElementById("ladoTr1");
const lado2 = document.getElementById("ladoTr2");
const baseTr = document.getElementById("baseTr");

const calcPerimetroTriangulo = (l1, l2, b) => {
    l1 = parseInt(lado1.value);
    l2 = parseInt(lado2.value);
     b = parseInt(baseTr.value);
    return l1 + l2 + b;
}
const areaT = (base, altura) =>{
    return (base * altura) /2
}

console.groupEnd();

// circulo = C
console.group("Circulo");

// const radioC = 4;
// const diametroC = radioC * 2;
// const PI =  Math.PI;
// const perimetroCir = diametroC * PI;
// const areaCir = (radioC * radioC) * PI;

// console.log("El radio del circulo es: " + radioC);
// console.log("El diametro del circulo es: " + diametroC);
// console.log("El perimetro del circulo es: " + perimetroCir);
// console.log("El Area del circulo es: " + areaCir);
// console.log("PI es: " + PI);

const diametroC = (radio) => {
  return radio * 2
}

const perimetroCir = (radio) => {
    diametro = diametroC(radio);
    return diametro * Math.PI;
}

const areaCir = (radio) => {
     return (radio * radio) * Math.PI;
}

console.groupEnd();


const raizCuadrada = (n) => {
    return Math.sqrt(n)
}

