// Write Number in Expanded Form

function expandedForm(num) { 
    const arr = Array.from(num.toString());
    console.log(arr);
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


//Toughts
//Array umkehren, sodass ['1','2','3'] => ['3','2','1']
//im FOR LOOP: Zahl * 10^i => arr[i]*10^i;
//3 * 10^0 = 3
//2 * 10^1 = 20
//1 * 10^2 = 100

