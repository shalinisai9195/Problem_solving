
let prev = 0
let curr = 1
let num = 20

for(let i = 2; i <= num; i++){
  let next = prev + curr
  prev = curr
  curr = next
}

console.log(curr)