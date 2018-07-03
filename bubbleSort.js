function bubbleSort(array) {
	var len = array.length;
	for (var i = len-1; i>=0; i--){
		for(var j = 1; j <= i; j++){
			if(array[j-1] > array[j]){
				var temp = array[j-1];
				array[j-1] = array[j];
				array[j] = temp;
			}
		}
	}
	return array;
}

// test array:
var tab = [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]

console.log(bubbleSort(tab));