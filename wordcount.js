var string="hello everyone i am rasel hosen.";
var count=0;
var max=[""];

for(var i=0;i<string.length;i++){
    if(string[i]==" "&& string[i-1]!=" "){
        count++;
    }
   
}

console.log(count+1);