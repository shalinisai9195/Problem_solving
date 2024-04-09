
let prev = 0
let curr = 1
let num = 20

for(let i = 2; i <= num; i++){
  curr = prev + curr
  prev = curr - prev
}

console.log(curr)