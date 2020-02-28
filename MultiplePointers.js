function naiveSumZero (arr) {
    for(let i = 0; i < arr.length; i++) {
        for(let j = i+1; j < arr.length; j++) {
            if(arr[i] + arr[j] === 0) {
                return [arr[i],arr[j]]
            }
        }
    }
}

function sumZero (arr) {
    let start = 0;
    let end = arr.length-1;
    while(start < end) {
        let sum = arr[start] + arr[end];
        if(sum == 0 ) {
            return [arr[start],arr[end]];
        }
        if(sum > 0) {
            end--;
        }
        if(sum < 0) {
            start++;
        }
    }
}

function countUnique (arr) {
    let point1 = 0;
    let point2 = 1;
    while(point2<arr.length) {
        if(arr[point1] == arr[point2]) {
            arr.splice(point2,1);
        } else {
            point1++;
            point2++
        }
    }
    return arr.length;
}

function countUnique1 (arr) {
    let point1 = 0;
    let point2 = 1;
    while(point2<arr.length) {
        if(arr[point1] == arr[point2]) {
            point2++
        } else {
            point1++;
            arr[point1] = arr[point2];
            point2++;
        }
    }
    return point1+1;
}