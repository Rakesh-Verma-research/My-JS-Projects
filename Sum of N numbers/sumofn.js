let num = document.getElementById('inp');
let sum = 0;

//First Method:-

// num.addEventListener('input', function(){

//     let enteredValue = this.value;
//     sum = 0;
    
//     for(let i = 1; i<= enteredValue; i++){
//         // let sum = 0;
//         sum += i;
        
//     } document.getElementById('sumOfNums').innerHTML = `Sum of all ${enteredValue} natural numbers = ${sum}`
// });

//Second Method:-

num.addEventListener('input', function(){
    // console.log('Number changed');
    let enteredValue = Number(this.value);
    // console.log(typeof(enteredValue))
    
    sum = enteredValue*(enteredValue + 1)/2;
    document.getElementById('sumOfNums').innerHTML = `Sum of all ${enteredValue} natural numbers = ${sum}`
});
sum = 0;
