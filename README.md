RGB > HEX Colour Conversion

A simple color conversion from RGB to Hexadecimal colours

How to use

My bot will respond on the below instruction.
It's not case sensitive.

"convert rgb #,#,# to hex"

Option 1.
If # are valid RGB numbers(0-255),
My bot will return a hex value.

Option 2.
If # are not valid RGB numbers,
My bot will return the below message.

"Please use valid numbers with an animated gif".

Approach
To translate the RGB value into hexadecimal value, first take the value of Red (51) and divide it by 16.The balance is 3.1875. The integer 3, will be the first number in the hexadecimal formula. The remainder(0.1875) should be multiplied by 16, which also results in the number 3. So, 51 translates to 33 in hex. Please see below for the fundamental variables.

  let hexNum =[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
  let R1 = parseInt(R/16);
  let R2 = R%16;

Unsolved Problems
My code is very repetitive. I need to improve it in a DRY approach.
