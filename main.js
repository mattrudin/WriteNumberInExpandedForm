// Write Number in Expanded Form

function expandedForm(num) { 
    const arr = Array.from(num.toString());
    console.log(arr);
    const arrLength = arr.length;
    const result = [];
    const arrInv = [];
    
    //Inverting the array
    for (let j = 0; j < arrLength; j++) {
    	arrInv.unshift(arr[j]);
    }
    console.log(arrInv);

    //i times 10 to the power of i
    for (let i = 0; i < arrLength; i++) {
      if (arrInv[i] != 0) {
      result.unshift(arrInv[i] * Math.pow(10, i) );
      };
    }
    console.log(result.join(' + '));
}


//Tests
expandedForm(700);
expandedForm(1204);


//Toughts
//Array umkehren, sodass ['1','2','3'] => ['3','2','1']
//im FOR LOOP: Zahl * 10^i => arr[i]*10^i;
//3 * 10^0 = 3
//2 * 10^1 = 20
//1 * 10^2 = 100

