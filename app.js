let stringers=[3, "Jerry", "Sandy", 4, "Pepper", 15, "Jocastah", 12];
let array = document.createElement("div");
array.innerHTML = "The array is: " + stringers;
document.body.appendChild(array);
for(let i = 0; i<stringers.length; i++){
    let newdiv = document.createElement("div");
    newdiv.addEventListener("click",function(){
        newdiv.style.color = "blue";
    })
    if(isNaN(stringers[i])) {
        if ((stringers[i]).length > 5) {
            let value = "the length of the string is more than 5.";
            newdiv.innerHTML = "The value is " + stringers[i] + " and " + value;
            document.body.append(newdiv);
        } else {
            let value = " it's normal."
            newdiv.innerHTML = "The value is " + stringers[i] + " and " + value;
            document.body.append(newdiv);
        }
    }
    else{
        if(stringers[i] < 10){
            let value = "the number is below 10.";
            newdiv.innerHTML = "The value is " + stringers[i] + " and " + value;
            document.body.append(newdiv);
        }
        else if(stringers[i] == 15){
            let value = "the number is 15.";
            newdiv.innerHTML = "The value is " + stringers[i] + " and " + value;
            document.body.append(newdiv);
        }
        else{
            let value = "it's normal.";
            newdiv.innerHTML = "The value is " + stringers[i] + " and " + value;
            document.body.append(newdiv);
        }
    }






}
// If it is number below 10.
// If the string's character length is more than 5
// If the number is exactly 15
// If none of the above, say "normal"
