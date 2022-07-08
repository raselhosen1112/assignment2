/*var array=[5,20,30,40];
var sum=0;
for(var i=0;i<array.length;i++){
    sum=sum+array[i];
}
console.log(sum);*/

function calculateSum(num)
{
    var sum=0;
    for(var i=0; i<num.length;i++)
    {
        sum=sum+num[i];
    }
    return sum;
}
var a=[5,10,25,30];
var result=calculateSum(a);
console.log(result);
