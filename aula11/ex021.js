// Matrizes
let num = [5, 8, 2, 9, 3];
num[5] = 6;
num.push(7);
num.sort();
console.log(`Nosso vetor é o ${num}`);
console.log(`Nosso vetor tem ${num.length} elementos`);
num.indexOf(5);
var pos = num.indexOf(4);
if (pos == -1) {
  console.log("O valor não foi encontrada");
} else {
  console.log(`o valor 9 esta na posição ${pos}`);
}

/*
for(let i = 0; i < num.length; i++){
    console.log(num[i])
}
*/

for (let i in num) {
  console.log(num[i]);
}
