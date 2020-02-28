function BubbleSort(arr) {
    const swap = (arr, index1, index2) => {
//         let temp;
//         temp = arr[index1];
//         arr[index1] = arr[index2];
//         arr[index2] = temp;

// ES6 way
        [arr[index1],arr[index2]] = [arr[index2], arr[index1]];
    }
    //using noSwap variable to optimize the alogrithm 
    let noSwap;
    for(let i = arr.length; i > 0; i-- ) {
        noSwap = true;
        for( let j = 0; j<i-1; j ++) {
            console.log(arr);
            if(arr[j] > arr[j+1]) {
                swap(arr,j,j+1)
                noSwap = false;
            }
        }
        if(noSwap) break;
    }
    return arr
}

function SelectionSort(arr) {
    const swap = (arr, index1, index2) =>{
        [arr[index1],arr[index2]] = [arr[index2],arr[index1]];
    }
    for(let i = 0; i < arr.length; i++) {
        let smallestElem = i;
        for( let j = i+1; j < arr.length; j++) {
            if(arr[smallestElem] > arr[j]) {
                smallestElem = j
            }
        }
        //as the smallestElem index was found it would be swap for the original spot
        if(smallestElem != i) {
            swap(arr,smallestElem,i)
        }
    }
    return arr;
}

function InsertionSort(arr) {
    for(let i = 1; i < arr.length; i++) {
        if(arr[i] < arr[i-1]) {
            let checkingIndex = i;
            for(let j = i-1; j >= 0; j--) {
                if(arr[j] < arr[checkingIndex]) {
                    arr.splice(j+1,0,checkingIndex);
                    break;
                }
            }
        }
    }
    return arr;
}

function InsertionSortColt(arr) {
    for(let i = 1; i < arr.length; i++) {
        let currentValue = arr[i];
        for(var j = i-1; j >= 0 && arr[j] > currentValue; j--) {
            arr[j+1] = arr[j];
        }
        arr[j+1] = currentValue;
        console.log(arr);
    }
    return arr;
}

function mergeTwoArrays(arr1,arr2) {
	let result = [];
	let i = 0;
	let j = 0;
	while(i < arr1.length && j < arr2.length) {
		if(arr1[i] < arr2[j]){
			result.push(arr1[i]);
			i++;
		} else {
			result.push(arr2[j]);
			j++;
		}
	}
	while(i < arr1.length) {
		result.push(arr1[i]);
		i++;
	}
	while(j < arr2.length) {
		result.push(arr2[j]);
		j++;
	}

	return result;
}
function mergeSortAlgo(arr) {
	if(arr.length <= 1) return arr;
	let midPoint = Math.floor(arr.length/2);
	let left = mergeSortAlgo(arr.slice(0,midPoint));
	let right = mergeSortAlgo(arr.slice(midPoint));
	return mergeTwoArrays(left,right);
}


function pivotHelper(arr, start = 0, end = arr.length-1) {
	const swap = (array, idx1, idx2) => {
		[array[idx1],array[idx2]] = [array[idx2],array[idx1]];
	};
	let pivot  = arr[start];
	let currentPivotIndex = start;
	for(let i = start+1 ; i <= end; i++) {
		if(arr[i] < pivot) {
			currentPivotIndex++;
			swap(arr,currentPivotIndex,i);
		}
	}
	swap(arr,start,currentPivotIndex);
	return currentPivotIndex;
}

function quickSort(arr, left = 0, right = arr.length-1) {
	if(left < right){
		let pivotIndex = pivotHelper(arr, left, right);
		//left
		quickSort(arr,left,pivotIndex-1);
		//right
		quickSort(arr,pivotIndex+1,right);
	}
	return arr;
}
console.log(quickSort([101,1,2,3,-10,7,8]));