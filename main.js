// Write Number in Expanded Form

function expandedForm(num) { 
    const arr = Array.from(num.toString());
    const arrLength = arr.length;
    const result = [];
    
    for (let i = 0; i < arrLength; i++) {
      if (arr[i] != 0) {
      result.push[i];
      };
    }
  // 3. return string mit folgenden ${values}:
    // 3.1. if (arr[arrLength-1] != 0) {Zahl anzeigen};
    // 3.2. if (arr[arrLength-2] != 0) {zweitletzte Zahl * 10};
    // 3.3. etc...
    console.log(result);
    //return result //.join(' + ');
}


//Tests
expandedForm(700);
expandedForm(1234);