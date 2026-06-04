const sentence: string = "Java programming is fun and challenging";
const numOfWords: string[] = sentence.split(" ");
console.log(`======Words in the sentence======`);
console.log(numOfWords);
console.log(`Number of words in the sentece are: ${numOfWords.length}`);

console.log(`======Reverse order with out loop======`);
let reverseOrderWithOutLoop: string[] = numOfWords.reverse();
console.log(reverseOrderWithOutLoop);

console.log(`======Reverse order with loop======`);
let reverseOrder: string[] = [];
for (let i: number = numOfWords.length - 1; i >= 0; i--) {
  //   console.log(numOfWords[i]);
  reverseOrder.push(numOfWords[i]!);
}
console.log(reverseOrder.reverse());

console.log(`======First character of each word to uppercase======`);

const upperCaseSentence: string = numOfWords
  .reverse()
  .reduce((word, curr) => {
    return word + curr.toUpperCase() + " ";
  }, " ")
  .trim();
console.log(upperCaseSentence);
