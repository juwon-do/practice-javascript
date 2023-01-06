// function firstTask() {
//   console.log('first');
// }

// function secondTask() {
//   console.log('second');
// }

// function thirdTask() {
//   console.log('third');
// }

// setTimeout(firstTask, 2000);
// setTimeout(secondTask, 4000);
// setTimeout(thirdTask, 6000);

setTimeout(function() {
  console.log('First task done!');
  setTimeout(function() {
    console.log('Second task done!');
    setTimeout(function() {
      console.log('Third task done!');
    }, 2000);
  }, 2000);
}, 2000);



setTimeout(function() {
  console.log('Third task done!');
}, 6000);