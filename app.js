function convertToRoman(num) {
    var romanNums ={
      I: 1,
       V: 5,
       IX:9,
       X: 10,
       L: 50,
       C: 100,
       D: 500,
       M: 1000
    }
    for(var i = 0; i >= romanNums.length; i++ ){
      if (num === romanNums[i]){
        console.log(romanNums[i]);
      }
    }
   }
   
   convertToRoman(36);
