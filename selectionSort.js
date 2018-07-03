function selectionSort(array) {
	var minIdx, temp, len = array.length;
	for(var i = 0; i < len; i++){
		minIdx = i;
		for(var j = i+1; j < len; j++){
			if(array[j] < array[minIdx]){
				minIdx = j;
			}
		}
		temp = array[i];
		array[i] = array[minIdx];
		array[minIdx] = temp;
	}
	return array;
}

// test array:
var tab = [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]

console.log(selectionSort(tab));