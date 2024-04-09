// Solution 1
const secLargest = (arr)=> {
  let res = arr.sort((a,b)=> a-b)
  console.log(res[res.length-2])
}
let input = [10,5,8,19,34,6,33]
secLargest(input)

