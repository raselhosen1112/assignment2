var array=[25,30,20,5,35,80];
var max=array[0];
for(i=0;i<array.length;i++)

{
    var element=array[i];
    if(element>max)
    {
        max=element;
    }
}
console.log("max number is",max);

