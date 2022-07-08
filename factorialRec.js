var fact=1;
function calFact(n)
{
    if(n==1)
    {
        return 1;
    }
    else{
        return fact=calFact(n-1)*n;
    }
}

var result=calFact(6);
console.log(fact);