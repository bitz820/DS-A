function sumFibs(num) {
    let prevNum = 0;
    let currNum = 1;
    let total = 0;

    while (currNum <= num){
      if (currNum % 2 !== 0){
        total += currNum
      }
      currNum += prevNum
      prevNum = currNum - prevNum
    }
    return total
}

sumFibs(1000);