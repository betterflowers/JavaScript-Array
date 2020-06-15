// The writer determines whether the following variables are of type array.
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
//TODO
console.log(Array.isArray(a));
console.log(Array.isArray(b));

// Write a program that multiplies each entry in the following array by 2。
var a = [1, 2, 3, 4, 5];
// TODO should output [2,4,6,8,10]
for(var i=0; i <a.length;i++)
{	a[i] = a[i]*2; }
console.log(a);

// Write the program, according to the following requirements output results.
var colors = ["Red", "Green", "White", "Black"];
//TODO case 1 output: 'Red Green White Black'
console.log(colors.join(' '));
// case 2 output: 'Red+Green+White+Black'
console.log(colors.join('+'));
// case 3 output: 'Red,Green,White,Black'
console.log(colors.join(','));


// Write a program to sort the Numbers in the following array from largest to smallest.
var a = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]
a.sort(function(a,b){return b-a});
console.log(a);

// Program to find the most frequent element in the following array.
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//TODO should output: 'a'
function GetArrayMost(arr){

    var arrMap = new Map();
    var key = arr[0],
    value = 1;
    arr.forEach((item, index) => {

      if (arrMap.get(item) !== undefined) {
        let num = arrMap.get(item);
        arrMap.set(item, ++num);
      } else {
        arrMap.set(item, 1);
      }

      if (arrMap.get(item) > value) {

        key = item;
        value = arrMap.get(item);
      }
    });
    return [key,value];
}
console.log(GetArrayMost(a)[0]);


