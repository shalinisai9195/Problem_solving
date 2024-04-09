let str = 'racecar'
let ans = str.split('').reverse().join('')

if(ans === str){
  console.log(true,'Its palindrome')
}else{
  console.log(false,'Its not a palindrome')
}
