function isPrime(n)
{
    for(var i=2;i<n;i++)
    {
        if(n%i==0)
        {
            console.log("not prime number");
            break;
        }
        else{
            console.log("prime number");
        }
    }
}
isPrime(78);