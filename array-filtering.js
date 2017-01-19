var numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var filteredArray = numbersArray.filter(function isEven(element) {
  return (element % 2) === 0;
     });
console.log(filteredArray);     