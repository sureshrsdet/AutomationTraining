const sentence: string = "Java programming is fun and challenging";

const reverseOrder = sentence.split(" ").toReversed();

const upperCase: string = sentence
  .split(" ")
  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
  .join(" ");

console.log(upperCase);
console.log(reverseOrder);
console.log(`====Using regx======`);
const capitailized: string = sentence
  .split(" ")
  .join(" ")
  .replace(/\b\w/g, (char) => char.toUpperCase());
console.log(capitailized);
