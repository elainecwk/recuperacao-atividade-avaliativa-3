import leia from "readline-sync";

var num1 = leia.questionInt("DIGITE o PRIMEIRO NUMERO:");
var num2 = leia.questionInt("DIGITE O SEGUNDO NUMERO:");
var num3 = leia.questionInt("DIGITE O TERCEIRO NUMERO:");

if(num1 < num2){
    console.log (num1, num2 = num2, num1);
 if (num1 < num3){
    console.log (num1, num3 = num3, num1);
if (num2 < num3){
    console.log( num2, num3 = num3, num2);
}
 }
 console.log("NUMEROS EM ORDE DECRESCENTE:" , num1, num2, num3)
}