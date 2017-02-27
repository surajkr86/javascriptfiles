var input1 = [1, 5, 10, 20, 40, 80];
var input2 = [6, 7, 20, 80, 100];
for(var i=0; i<input1.length; i++){
    for (var j=0; j<input2.length; j++){
        if(input1[i]==input2[j]){
            console.log("repeat" +input2[j]);

        }
    }
}

