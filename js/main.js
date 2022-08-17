var ageId = document.getElementById("ageId");
var ageText = document.getElementById("ageText");
var line = document.getElementById("line");
var ageInput = document.getElementById("ageInput");

function calculateAge(){
    var year = Number( ageInput.value);
    var dat = new Date();
    var age = Number(dat.getFullYear())-year;
    ageId.innerHTML=`Your age is<span> ${age}</span>`

    if(age>=18){
        ageText.innerHTML ="You are young"
    }else{
        ageText.innerHTML ="You are kid"
    }

    var stars="";
    for(var i =0;i<age;i++){
        stars +="*";
    }

    line.innerHTML=stars;
}

