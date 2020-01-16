function Rectangle(width, height) {
  // throw new Error('Not implemented');
  this.width = width;
  this.height = height;
  this.getArea = function () {
    return this.width * this.height
  };
}

function getTail(n, ...arr) {
  let answersArray = [];
  for (let i = 0; i < arr.length; i++) {
    answersArray[i] = [];
    for (let j = 0; j < n; j++) {
      answersArray[i][j] = arr[i][arr[i].length - n + j];
    }
  }
  return answersArray;
  //  throw new Error('Not implemented');
}

function getArrayOfPositives(arr) {
  let answersArray = [];
  arr.forEach(element => {
    if (element > 0) {
      answersArray.push(element);
    }
  });
  return answersArray;
  //throw new Error('Not implemented');
}

function distinct(arr) {
  let result = [];
  let flag = true;
  for (let j = 0; j < arr.length; j++) {
    flag = true;
    for (let i = 0; i < arr.length; i++) {
      if (arr[j] === arr[i] && i != j) {
        flag = false;
        break;
      }
    }
    if (flag == true) {
      result.push(arr[j]);
    }
  }
  return result;
  //  throw new Error('Not implemented');
}



let rectungleObj = new Rectangle(200, 100);
console.log(rectungleObj);
console.log(rectungleObj.getArea());
console.log(getTail(2, [1, 2, 3, 4, 5], [7, 5, 4, 6], [4, 4, 4, 4, 4]));
console.log(getArrayOfPositives([-1, -7, 2, -4, -9, 2, -1, -3, 8]));
console.log(distinct([1, 2, 2, 3, 3, 4, 5, 6, 4, 6, 7, 8, 8, 7, 9, 8, 8, 7]));