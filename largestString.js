function longest_str_in_array(arra)
  {
    let max_str = arra[0].length;
    var ans = arra[0];
    for (var i = 1; i < arra.length; i++) {
       var maxi = arra[i].length;
        if (maxi> arra[0].length) {
            ans = arra[i];
            //max_str = maxi;
        }
    }
    return ans;
}
console.log(longest_str_in_array(["abcdeef", "abcedeegh", "abcd"]));

console.log(longest_str_in_array(["abcde","Rahimkhan","Karim","Jitu"]));