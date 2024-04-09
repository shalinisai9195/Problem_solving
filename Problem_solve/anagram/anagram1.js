
function isAnagram(s1,s2){

  if(s1.length !== s2.length){
    return false
  }

  let fr_str = s1.split('').sort().reverse().join('')
  let sec_str = s2.split('').sort().reverse().join('')

   return fr_str == sec_str

}

let str1 = 'listen'
let str2 = 'silent'

console.log(isAnagram(str1,str2))