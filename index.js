// Code your solutions in this file

const array = ['Lisa', 'Kaitlin', 'Jan']
const word = "surprise"
const newArray = [];

function writeCards(array, word) {
    for (let i = 0; i < array.length; i++) {
        newArray[i] = `Thank you, ${array[i]}, for the wonderful ${word} gift!`;
    }
    return newArray
}

writeCards(array, word);



function countDown() {
    let i = 10
    while (i >= 0) {
        console.log(i);
        i--;
    }
}
countDown();