
function factorial(n){
  let result = 1
  for(let i= 1; i <= n; i++){
      result = i * result
  }
 console.log(result)
}
let num = 5
factorial(num);