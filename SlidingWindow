function naiveSubarraySum (arr, num) {
    if(num > arr.length) {
        return null;
    }
    var max = -Infinity;
    for(let  i = 0; i < arr.length-num+1; i++) {
        temp = 0;
        for(let j = 0; j < num; j++) {
            temp += arr[i + j];
        }
        if(temp > max) {
            max = temp;
        }
    }
    return max
}

function maxSubarraySum (arr,num) {
    let tempSum = 0;
    let maxSum = 0;
    if(arr.length<num) return null;
    for(let i = 0; i < num; i++) {
        maxSum += arr[i];
    }
    tempSum = maxSum;
    for(let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i-num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    };
    return maxSum;
}

function minSubArrayLen(arr, sum) {
    let minLen = Infinity;
    let length = 0;
    let tempSum = 0;
    let currentIndex = 0;
    while (currentIndex <= arr.length) {
        if(tempSum >= sum) {
            minLen = minLen >= length ? length: minLen;
            if(minLen == 1 ) return minLen;
            tempSum -= arr[currentIndex - length];
            length = length - 1;
        } else if (tempSum < sum) {
            tempSum += arr[currentIndex];
            currentIndex = currentIndex + 1;
            length = length + 1;
        }
    }
    if(minLen == Infinity) {
        return 0
    } else {
        return minLen
    }
}