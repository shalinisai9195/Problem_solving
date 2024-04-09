let str = 'racecar'

let reverse = ''

for(let i = str.length-1; i >=0 ; i--){
  
  reverse += str[i] 
}
if(reverse === str){
  console.log( true,' it is a palindrome')
}else{
  console.log( false,'not a palindrome')
}

