function kilometerToMeter(kilometer)
    {
        var meter;
        if(kilometer<0)
        {
            return "negative kilometer are not possible";
        }
        else{
            return meter=kilometer*1000;

        }
}
var kilometer=-5;
result=kilometerToMeter(kilometer);
console.log(result);

function budgetCalculator( watch, mobile,laptop){
    if(watch<0 || mobile<0|| laptop<0)
    {
        return "undfined";

    }
    else{
    var watchPrice=watch*50;
    var mobilePrice=mobile*100;
    var laptopPrice=laptop*500;
    
    var totalPrice=watchPrice+mobilePrice+laptopPrice;
    return totalPrice;
    }
}
var watch=-1;
var mobile=3;
var laptop=1;
console.log(budgetCalculator(watch, mobile, laptop));
function hotelCost(day)
{
    var cost=0;
    if(day<0)
    {
        return "please stay at least one day";
    }
    else if(day<=10)
    {
       return cost=day*100;
    }
    else if(day<=20)
    {
        var firstpart=10*100;
        var secondpart=(day-10)*80;
        return cost=firstpart+secondpart;
    }
    else{
        var firstpart=10*100;
        var secondpart=10*80;
        var thirdpart=(day-20)*50;
      return  cost=firstpart+secondpart+thirdpart;
    }
    
}
var day=-1;
console.log(hotelCost(day));

function megaFriend(string)
{
    var max=string[0];
    for(var i=0;i<string.length;i++)
    {
        var maxi = string[i].length;
        if(maxi>max.length)
        {
            
            max=string[i];
        }

    }
    return max;
}
console.log(megaFriend(["Rasel","Rahimkhan","Karimuddinkha","Jitu"]));
