// 2 Exam
// Ganiyev Shohjahon
// 10 ta degan ekansiz 101 dan 110 gacha 10 masala shuning uchun 100 ni ishlamadim.

// -------------------------------------------
// 101.
function sonlarYigindi(num) {
  let yigindi = 0;
  for (let i = 1; i <= num; i++) {
    yigindi += i;
  }
  return yigindi;
}
console.log(sonlarYigindi(3));

// -------------------------------------------
// 102.
function sonlar(min, max, num) {
  if (num >= min && num <= max) {
    return true;
  } else {
    return false;
  }
}
console.log(sonlar(0, 5, 4));

// -------------------------------------------
// 103.
function sonKvadrat(num) {
  let son = num * num;
  let oxirgi = son % 10;
  if (oxirgi === num) {
    return true;
  } else {
    return false;
  }
}
console.log(sonKvadrat(6));

// -------------------------------------------
// 104.

function massivIndex(massiv) {
  let indexMassiv = [];
  for (let i = 0; i < massiv.length; i++) {
    indexMassiv.push(massiv[i] + i);
  }
  return indexMassiv;
}
console.log(massivIndex([5, 4, 3, 2, 1]));

// -------------------------------------------
// 105.

function ichimliklarShakarsiz(massiv) {
  return massiv.filter(
    (ichimlik) => ichimlik !== "cola" && ichimlik !== "fanta",
  );
}
console.log(ichimliklarShakarsiz(["cola", "fanta", "water"]));

// -------------------------------------------
// 106.

function nechtaRaqam(num) {
  return num.toString().length;
}
console.log(nechtaRaqam(123));
// -------------------------------------------
// 107.
function kattaSon(num) {
  let strNum = num.toString();
  let raqamlar = strNum.split("");
  raqamlar.sort((a, b) => b - a);
  let katta = raqamlar.join("");
  return katta;
}

console.log(kattaSon(1234));
// -------------------------------------------
// 108.
function randomSon(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(randomSon(1, 10));

// -------------------------------------------
// 109.

function narissistikSon(num) {
  let strNum = num.toString();
  let length = strNum.length;
  let yigindi = 0;
  for (let i = 0; i < length; i++) {
    yigindi += Math.pow(strNum[i], length);
  }
  return yigindi === num;
}
console.log(narissistikSon(153));

// -------------------------------------------
// 110.

function kattaHarf(string) {
  let katta = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i].toUpperCase()) {
      katta++;
    }
  }
  return katta;
}
console.log(kattaHarf("jshsHokkJoajlwHG"));

// -------------------------------------------
