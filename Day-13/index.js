// Linear Search
// Binary Search

var num = [1, 2, 3, 4, 5, 6, 7];
let targets = 6;

for (let i = 0; i < num.length; i++) {
    if (targets == num[i]) {
        console.log(i, "Result");
    }
    console.log(i);
}






var nums = [1, 2, 3, 4, 5, 6, 7, 8];
var target = 8;

function binarySearch(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let middleIndex = Math.round((left + right) / 2);
        let middleElement = nums[middleIndex];
        if (target == middleElement) {
            return middleIndex;
        } else if (target > middleElement) {
            left = middleIndex + 1;
        } else if (target < middleElement) {
            right = middleIndex - 1;
        }
    }
}
console.log(binarySearch(nums, target));








// Event Loop

// call stack
// web api
// call queue
// event loop

console.log(1);
setInterval( () => {
    console.log(2);
}, 2000);
setInterval( () => {
    console.log(4);
}, 5000);
setInterval( () => {
    console.log(5);
}, 1000);
console.log(3); 