function uniteUnique(arr) {

    let fullTest = (Array.from(arguments).flat())
    console.log(fullTest)
  
    // look at first array and iterate
  
    let finalArr = []
  
    for (let i = 0; i < fullTest.length; i++) {
    
    // if any number is unique, push it into the final array
    
      !finalArr.includes(fullTest[i]) ? finalArr.push(fullTest[i]) : null
    }
  
  
    // console.log(finalArr)
  
    // if arr[i] already exists in final array, skip it
  
    //return final array
  
  console.log(finalArr)
    return finalArr;
  }
  
  uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);