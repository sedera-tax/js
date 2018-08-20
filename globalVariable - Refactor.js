// the global variable
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

/* This function should add a book to the list and return the list */
function add (list, bookName) {
	var newList = list.slice(0);
	newList.push(bookName);
	return newList;
}

/* This function should remove a book from the list and return the list */
function remove (list, bookName) {
	var newList = list.slice(0);
	if (newList.indexOf(bookName) >= 0) {
		newList.splice(newList.indexOf(bookName), 1);
		return newList;
	}
}

var newBookList = add(bookList, 'A Brief History of Time');
console.log(newBookList);
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
console.log(newerBookList);
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');
console.log(newestBookList);

console.log(bookList);