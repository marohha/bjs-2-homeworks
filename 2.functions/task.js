function getArrayParams(...arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;
  let avg;
  for (i = 0; i < arr.length; i++){
    if (arr[i] > max) {
      max = arr[i];
    } else if (arr[i] < min) {
      min = arr[i];
    }
    sum += arr[i];
    avg = Number((sum / arr.length).toFixed(2));
  }

  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  sum = 0;
  if (arr.length === 0){
    return 0;
  }
  for (i = 0; i < arr.length; i++){
    sum += arr[i];
  }
  return sum;
}

function differenceMaxMinWorker(...arr) {
  let min = arr[0];
  let max = arr[0];
  if (arr.length === 0){
    return 0;
  }
  for (i = 0; i < arr.length; i++){
    if (arr[i] > max) {
      max = arr[i];
    } else if (arr[i] < min) {
      min = arr[i];
    }
  }
  return max - min;
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  if (arr.length === 0){
    return 0;
  }
  for (i = 0; i < arr.length; i++){
    if (arr[i] % 2 ===0){
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i];
    }
  }
  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;
  if (arr.length === 0){
    return 0;
  }
  for (i = 0; i < arr.length; i++){
    if (arr[i] % 2 === 0){
      sumEvenElement += arr[i];
      countEvenElement ++;
    }
  }
  return sumEvenElement / countEvenElement;
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  for (i = 0; i < arrOfArr.length; i++){
    // Ни как не могу понять смысл 4го пунтка этой задачи. Помогите разобраться куда передавать значания? И как правильно тут использовать spread-оператор?
    // const result;
    // if (result > maxWorkerResult){
    //   maxWorkerResult = result;
    // }
  }
  return maxWorkerResult;
}
