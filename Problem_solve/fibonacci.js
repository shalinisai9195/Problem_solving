
function fibo(num){

  let fiboseries = [0,1];
  
  for(let i = 2; i <= num; i++){
    
    fiboseries[i] = fiboseries[i-2] + fiboseries[i-1]

  }
  return fiboseries
  
}

let number = 5
console.log(fibo(number))