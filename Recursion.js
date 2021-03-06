function sumRange(num) {
    if(num===1) return 1;
    return num + sumRange(num-1);
}

function factorial(num) {
    if(num === 1) return 1;
    return num * factorial(num-1)
}

//helper method example
function collectOddValues(arr){    

    let result = [];
    function helper(helperInput){
        if(helperInput.length === 0) {
            return;
        }
        
        if(helperInput[0] % 2 !== 0){
            result.push(helperInput[0])
        }
        
        helper(helperInput.slice(1))
    }
    
    helper(arr)

    return result;
}

function collectOddValuesPure(arr) {
    let newArr =[];
    if(arr.length == 0) {
        return newArr;
    }
    if(arr[0]%2 !== 0) {
        newArr.push(arr[0]);
    }
    newArr = newArr.concat(collectOddValuesPure(arr.slice(1)));
    return newArr;
}

function fib(num){
  // fibo number recursion
  if(num<=2) return 1;
  return fib(num-1) + fib(num-2);
}

// fibo number recursion with memoization Dynamic programming
function fibMemo(num,memo=[]){
    if(memo[num]!=undefined) return memo[num];
  if(num<=2) return 1;
  var res = fib(num-1, memo) + fib(num-2,memo);
  memo[num] = res;
  return res;
}

function fibTable(num) {
    if(n<=2) return 1;
    var fibNums= [0,1,1];
    for(var i=3;i<=n;i++) {
        fibNums[i] = fibNums[i-1] +fibNums[i-2];
    }
    return fibNums[n];

//flatten array and nested array
function flatten(arr){
  // add whatever parameters you deem necessary - good luck!
  let newArray=[];
  for(let i = 0; i< arr.length; i++) {
      if (Array.isArray(arr[i])){
          newArray = newArray.concat(flatten(arr[i]));
      } else {
          newArray.push(arr[i]);
      }
  }
  return newArray;
}