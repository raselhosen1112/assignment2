
function animalCalculator(depth){
var animal=0;
if(depth<=10)
{
    animal=depth*50;
}
else if(depth<=20){
    firstpart=10*50;
    secondpart=(depth-10)*100;
    animal=firstpart+secondpart;
}
else{
    firstpart=10*50;
    secondpart=10*100;
    thirdpart=(depth-20)*300;
    animal=firstpart+secondpart+thirdpart;

}
console.log(animal);
}
animalCalculator(25);