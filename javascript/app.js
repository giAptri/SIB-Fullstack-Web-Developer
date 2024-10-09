import {add, multiply} from "./math.js"; //mengambil function yang ada di dalam file math.js

function kalkulator(){
    let number1 = parseInt(document.getElementById("number1").value);
    let number2 = parseInt(document.getElementById("number2").value);

    let sum = add(number1, number2); //mengubah parameter yang ada  di dalam function add
    let kali = multiply(number1, number2);
    document.getElementById("result").innerText = 
    `Hasil penjumlahan Dari ${number1} + ${number2} = ${sum}
    Hasil Perkalian Dari ${number1} * ${number2} = ${kali}`;
}

document.getElementById("hitung").addEventListener("click", kalkulator);