function convert() {
  var numDeci = document.getElementById("num");
  var numRoman = document.getElementById("roman");
  numRoman.innerHTML = "Roman Number = " + convertToRoman(numDeci.value);
}

function convertToRoman(num) {
  var arr = num.toString().split("");
  var arr = arr.map((x, ind) => [x, arr.length - ind]);
  var arr = arr.map((x) => getRoman(...x));
  var romanNum = arr.join("").replace(/,*/g, "");
  //var arr = arr.map((val,ind) => val * (Math.pow(10,ind))).reverse();
  return romanNum;
}

function getRoman(num, place) {
  var roman = [];

  if (num >= 1 && num <= 3) {
    for (let i = 0; i < num; i++) {
      roman.push(getSymbol(place)[0]);
    }
  } else if (num == 4) {
    roman.push(getSymbol(place));
  } else if (num == 5) {
    roman.push(getSymbol(place)[1]);
  } else if (num >= 6 && num <= 8) {
    roman.push(getSymbol(place)[1]);
    for (let i = 5; i < num; i++) {
      roman.push(getSymbol(place)[0]);
    }
  } else if (num == 9) {
    roman.push(getSymbol(place)[0], getSymbol(place + 1)[0]);
  }

  return roman;
}

function getSymbol(place) {
  if (place == 1) return ["I", "V"];
  else if (place == 2) return ["X", "L"];
  else if (place == 3) return ["C", "D"];
  else if (place == 4) return ["M", "Z"];
  else return undefined;
}

//console.log(getRoman(9,3));
