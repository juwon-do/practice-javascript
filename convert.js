//Write a function that accepts an array of strings and returns a new array containing every other string from the original array. For example, if the input is ["a", "b", "c", "d", "e", "f"], the output should be ["a", "c", "e"].
function selectEvenItems(strings) {
  var result = [];
  var index = 0;
  strings.forEach(function(string) {
    if (index % 2 === 0) {
      result.push(string);
    }
    index++;
  }); 
  return result;
}

console.log(selectEvenItems(["a", "b", "c", "d", "e", "f"]));


//Write a method that accepts one argument - an array of numbers. The method should return the greatest number. For example, if the input is [5, 4, 8, 1, 2], the output should be 8.

function maxNum(numbers) {
  var max = numbers[0];
  numbers.forEach(function(number) {
    if (max < number) {
      max = number;
    }
  });
  return max;
}
console.log(maxNum([5, 4, 8, 1, 2]));

//Write a method that accepts a number and returns its factorial. For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.

function factorial(number) {
  var num = number;
  var result = 1;
  for (var i = 0; i < num + 1; i++) {
    result = result * num;
    num -= 1;
  }
  return result;
}

console.log(factorial(5));

//Write a method that accepts one argument - an array of numbers that are in ascending order. The method that returns a new array with the same values in descending order. However, do not use the "reverse" method built into Ruby.
function descending(numbers) {
  var result = [];
  var i = numbers.length - 1;
  for (i; 0 < i + 1; i--) {
    result.push(numbers[i]);
  }
  return result;
}
console.log(descending([1 , 3 , 5, 7]));

// Write a method that accepts two arrays of numbers, and returns an array of every sum of every combination of single numbers from the first and second array. For example, if the method receives [1, 5, 10] and [100, 500, 1000], the method should return this array: [101, 501, 1001, 105, 505, 1005, 110, 510, 1010].

function combinations(num1, num2) {
  var result = [];
  num1.forEach(function(num1) {
    num2.forEach(function(num2) {
      result.push(num1 + num2);
    });
  });
  return result;
}
console.log(combinations([1, 5, 10], [100, 500, 1000]));