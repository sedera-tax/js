function insertionSort(array) {
	var i, len = array.length, el, j;

	for(i = 1; i < len; i++){
		el = array[i];
		j = i;

		while(j > 0 && array[j-1] > el){
			array[j] = array[j-1];
			j--;
		}

		array[j] = el;
	}
	return array;
}

// test array:
var tab = [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]

console.log(insertionSort(tab));