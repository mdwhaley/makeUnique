// Write your solution below:
function makeUnique(string) {
  let newString = string.slice(0, 1);
  for (let i = 1; i < string.length; ) {
    if (newString.includes(string[i]) != true) {
      newString = newString.concat(string[i]);
      i++;
    } else {
      i++;
    }
  }
  console.log(newString);
}
makeUnique("poop");
makeUnique("hollywood");
