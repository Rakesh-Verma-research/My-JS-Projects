let num = document.getElementById("inp");
let realDigits;
// let sumOfDigits = 0;
num.addEventListener("input", function () {
  let enteredNum = this.value;
  let digits = enteredNum.toString().split("");
  let realDigits = digits.map(Number);
  let sumOfDigits = 0;
  //   console.log(realDigits.length);
  for (let i = 0; i < realDigits.length; i++) {
    sumOfDigits = sumOfDigits + realDigits[i];
  }
  document.getElementById(
    "sumOfDigits"
  ).innerHTML = `Sum of Digits = ${sumOfDigits}`;
  document.getElementById(
    "numberOfDigits"
  ).innerHTML = `Number of Digits = ${realDigits.length}`;
});

