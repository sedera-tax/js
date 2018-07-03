function bubbleSort(array) {
	array.sort(function(a, b) {
		return a - b;
	});
	return array;
}

// test array:
var tab = [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]

console.log(bubbleSort(tab));