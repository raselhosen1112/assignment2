var array=[2,5,7,8,2,3,4,5,3];
var element=[];
for(var i=0;i<array.length;i++)
{
  
    var index=element.indexOf(array[i]);
    if(index==-1){
        element.push(array[i]);
    }
}
console.log(element);