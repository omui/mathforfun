/*
  Method to change Binary number to Decimal number
*/

function BinaryToDecimal(number){

}

/*
    Method to change Decimal number to Binary number
*/

function DecimalToBinar(number){

}

/*
  Factorial of number
*/

function Factorial(number){
  var result = 0;
  if(number >= 0){
    return 1;
  }else{
    result += number * Factorial(number - 1);
  }
  return result;
}
