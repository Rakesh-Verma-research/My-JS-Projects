// let arr = [1,2,3,4,5];
// arr.unshift(7,8,9,54,2653)
// arr.pop()
// arr.shift()
// arr.push(23);
// // function sum(){
// //     let sumOfAll = 0
// //     for (let i = 0; i<arr.length; i++){
// //          sumOfAll = sumOfAll + arr.at(i)

// //     } console.log(sumOfAll);
// // }
// // sum()
// console.log(arr);
// let arr1 = [13,45,76];
// let arr2 = arr.concat(arr1)
// let arr3 = arr.fill(54,6)

// // console.log(arr3)
// // console.log(arr2)
// let marks = [20, 17, 23, 34, 39, 29, 24];
// console.log(marks);
// passingMarks = marks.filter((a)=>{
// return a>33 && a<55;
// })
// console.log(passingMarks)
// failMarks = marks.filter((b)=>{
//     return b<33;
// })
// console.log(failMarks);
// newMarks = marks.map((x)=>{
//     return x = x**2;
// })
// console.log(newMarks)
// let percent = 0;
// marks.forEach((idx) => {
//   percent = idx * 5/2;
//   console.log(percent + "%");
// })


let factors = [];
for(let i=1;i<=56;i++){
    if(56%i == 0){
      factors.push(i);
    }
}console.log(factors)