var fact=1;
function findFact(num){
    for(var i=1;i<=num;i++)
   fact=fact*i;
    return fact;
}
console.log(findFact(5));