exports.min = function min (array) {
  if (typeof array == "undefined" || ((typeof array) != "undefined" && array.length == 0)) {
    return 0;
  }
  let newArr = JSON.parse(JSON.stringify(array));
  for (let i = 0; i < newArr.length; i++) {
      if (newArr[i] < newArr[i + 1]) {
          let buf = newArr[i];
          newArr[i + 1] = buf;
          newArr[i] = newArr[i + 1]
      }
  }
  return newArr[newArr.length - 1];
}
exports.max = function max (array) {
    if (typeof array == "undefined" || ((typeof array) != "undefined" && array.length == 0)) {
        return 0;
    }
  let newArr = JSON.parse(JSON.stringify(array));
  for (let i = 0; i < newArr.length; i++) {
        if (newArr[i] > newArr[i+1]) {
          let buf = newArr[i];
          newArr[i + 1] = buf;
          newArr[i] = newArr[i + 1]
        }
  }
  return newArr[newArr.length-1];
}

exports.avg = function avg (array) {
    if (typeof array == "undefined" || ((typeof array) != "undefined" && array.length == 0)) {
        return 0;
    }
  let newArr = JSON.parse(JSON.stringify(array));
  let sum =0;
  for (let i = 0; i < newArr.length; i++) {
    sum =sum + newArr[i];
  }
  return sum/newArr.length;
}
