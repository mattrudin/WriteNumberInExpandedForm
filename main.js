// Write Number in Expanded Form

function expandedForm(num) { 
    const arr = Array.from(num.toString());
    const arrLength = arr.length;
    const result = [];
    
    for (let i = 0; i < arrLength; i++) {
      if (arr[i] != 0) {
      result.push(arr[i]);
      };
    }
  // erste Zahl braucht Länge - 1 Nullen
  // zweite Zahl braucht Länge - 2 Nullen
  // etc...
    console.log(result.join(' + '));
    //return
}


//Tests
expandedForm(700);
expandedForm(1234);