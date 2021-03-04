
// You should implement your task here.

module.exports = function towelSort (matrix) {    

let duck = -1;
let count = -1;
let str1 = [];

if(!matrix.isArray) return str1;

for (let j = 0; j < matrix.length; j++)
{
  let i = -1;
  duck++;
  if (duck %2 == 1)
  {
    do
    {
      i++;
    }while(matrix[duck][i]);
    do
    {
      i--;
      count++;
      str1[count] = matrix[duck][i];
    }while(matrix[duck][i - 1]);
  }
  else 
  {
    do
    {
      count++;
      i++;
      str1[count] = matrix[duck][i];
    }while(matrix[duck][i]);
    str1.splice(count,1);
    count--;
  }
} 
return str1;
}
