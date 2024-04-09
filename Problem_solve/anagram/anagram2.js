
function isAnagram(s1,s2){
  
  let obj = {}
  
  s1.split('').forEach((it)=>{
     obj[it] ? obj[it]++ : obj[it]=1
  })

let ans = []
for(let [key,val] of Object.entries(obj)){
    
   if(s2.includes(key)){
     ans.push(val-1)
   }else{
    ans.push(val)
   }

}
console.log(ans)

}

let str1 = 'listen'
let str2 = 'silent'

isAnagram(str1,str2)