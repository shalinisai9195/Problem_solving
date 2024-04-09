
let arr = [1,2,4,7,6,5,9,0]
let min = arr[0]
let max = arr[arr.length - 1]

for(let i = 0; i < arr.length; i++){
     
    if(max < arr[i]){
        max = arr[i]
    }
    if(min > arr[i]){
      min = arr[i]
    }

}
console.log('max',max)
console.log('min',min)