


function porownajLiczby(x, y){
    var result;
    if(x == 20 || y == 20 || x+y <= 20){
        result = true;
    }
    else{
        result = false;
    }
    return result;
}

console.log("Case1: " + porownajLiczby(20,20));
console.log("Case2: " + porownajLiczby(20,13));
console.log("Case3: " + porownajLiczby(12,20));
console.log("Case4: " + porownajLiczby(7,13));
console.log("Case5: " + porownajLiczby(12,15));