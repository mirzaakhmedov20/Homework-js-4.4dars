//1. 1 dan n gacha barcha 3 ga hamda 7 ga karrali sonlar sonini topuvchi algoritm yozing

// 1. let n = 10;
// let sum = 0;
// for(let i = 1; i <= n; i++) {
//   if(i % 3 === 0 || i % 7 === 0) {
//     sum += i;
//   }

// console.log(sum);

// 2. n dan 1 gacha barcha juft sonlar yigindisni topuvchi algoritm yozing

// 2. let n = 10;
// let sum = 0;
// for(let i = n; i >= 1; i–) {
//   if(i % 2 === 0) {
//     sum += i;
//   }

// console.log(sum);

// 3. n soni berilgan berilgan songacha barcha5 ga bolinadigan hamda 7 ga bolinmaydiganlarining
// yigindisini topuvchi algoritm yozing

// 3. let n = 10;
// let sum = 0;
// for(let i = 1; i <= n; i++) {
//   if(i % 5 === 0 && i % 7 !== 0) {
//     sum += i;
//   }

// console.log(sum);

// 4. a va b sonlari berilgan (a < b). Ular orasidagi barcha manfiy sonlar yigindisini
// topuvchi algoritm yozing

// let a = -5;
// let b = 10;
// let sum = 0;
// for (let i = a; i <= b; i++) {
//   if (i < 0) {
//     sum += i;
//   }
// }

// console.log(sum);
//
// 5. Sonning faktorialini topadigan funksiya yozing
// function factorial(n){
//     let answer = 1;
//     if (n == 0 || n == 1){
//       return answer;
//     }
//     else if(n > 1){
//       for(var i = n; i >= 1; i--){
//         answer = answer * i;
//       }
//       return answer;
//     }
//     else{
//       return "son musbat emas."
//     }  
//   }
//   let n = prompt("enter number");
//   answer = factorial(n)
//   console.log("Factorial " + n + " : " + answer);
