// find largest element in an array

//Solution 1
function largestEle(arr){
  let max_num = 0

for(let n of arr){
  if(max_num < n){
    max_num = n
  }
}
console.log('largest Element',max_num)
}
let input = [10,5,8,19,34,6]
largestEle(input)

 // Solution 2
let sortArr = input.sort((a,b)=> a-b)
console.log(sortArr[sortArr.length-1])

