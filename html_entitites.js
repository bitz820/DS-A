function convertHTML(str) {
    let letterArr = (str.split(""))
    console.log(letterArr)
    for (let i = 0; i < letterArr.length; i++) {
      switch (letterArr[i]) {
        case ('&'):
          letterArr[i] = "&amp;";
          break;
        case ('<'):
          letterArr[i] = "&lt;";
          break;
        case ('>'):
          letterArr[i] = "&gt;";
          break;
        case ('"'):
          letterArr[i] = "&quot;";
          break;
        case ("'"):
          letterArr[i] = "&apos;";
          break;
        default:
          
      }
  
    }
    let newStr = letterArr.join("")
    return(newStr)
  }
  
  convertHTML("Dolce & Gabbana");