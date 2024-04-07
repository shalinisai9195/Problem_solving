
function isPrime(num){
  
  if(num === 2) return true
  if(num % 2 === 0) return false

  for(let i =3; i*i <= num; i+=2){
    
  if(num % i ==0){
    return  false
  }
      
}
  return true

}

let number = 101
console.log(isPrime(number) ? `${number} is a Prime Number` : `${number} is not a prime Number` )