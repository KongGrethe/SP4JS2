/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


document.onreadystatechange = function () {
    if (document.readyState === "interactive") {
        init();
    }
};


function init() {
    var myButton = document.getElementById("changeButton");
    myButton.onclick = function () {
        var myDivs = document.getElementsByTagName("div");

        for (var i = 0; i !== myDivs.length; i++) {
            myDivs[i].style.background = "blue";
        }
    };

    document.getElementById("alabama").onclick = function () {
        console.log("The alabama message");
    };

    document.getElementById("oklahoma").onclick = function () {
        console.log("The oklahoma div");
    };

    document.getElementById("hampshire").onclick = function () {
        console.log("The hampshire div");
    };

    var knud = new person("Knud", "Hansen", "11223344", "knud@hotmail.com");
    var benny = new person("Benny", "Petersen", "33117788", "benny@gmail.com");
    var jens = new person("Jens", "Karlsen", "9986633", "jens@gmail.com");
    var anders = new person("Anders", "And", "55551177", "andersand@egmont.dk");

    var myArray = [knud, benny, jens, anders];
    write(myArray, myArray.length);

    var hoverRed = document.getElementById("hoverRed");
    var hoverBlue = document.getElementById("hoverBlue");
    var hoverGreen = document.getElementById("hoverGreen");

    hoverRed.style.width = "200px";
    hoverRed.style.height = "200px";
    hoverRed.style.border = "1px solid red";

    hoverRed.onmouseenter = function () {
        console.log("Entered red");
    };

    hoverRed.onmouseout = function () {
        console.log("Left red");
    };

    hoverBlue.style.width = "200px";
    hoverBlue.style.height = "200px";
    hoverBlue.style.border = "1px solid blue";

    hoverBlue.onmouseenter = function () {
        console.log("Entered blue");
    };

    hoverBlue.onmouseout = function () {
        console.log("Left blue");
    };

    hoverGreen.style.width = "200px";
    hoverGreen.style.height = "200px";
    hoverGreen.style.border = "1px solid green";

    hoverGreen.onmouseenter = function () {
        console.log("Entered green");
    };

    hoverGreen.onmouseout = function () {
        console.log("Left green");
    };

    document.getElementById("myform").onsubmit = function () {
        var inputs = document.getElementById("myform").getElementsByTagName("input");
        console.log(inputs);
        
        var tmp = document.createElement("table");
        var builtString = "";
        
        builtString += "<tr><td>Name</td><td>" + document.getElementById("username").value + "</td></tr>";
        
        builtString += "<tr><td>Gender</td><td>";
        if(document.getElementById("genderMale").checked) {
            builtString += "Male";
        } else {
            builtString += "Female";
        }
        builtString += "</td></tr>";
        
        builtString += "<tr><td>Danish</td><td>" + document.getElementById("langDK").checked + "</td></tr>";
        builtString += "<tr><td>English</td><td>" + document.getElementById("langEN").checked + "</td></tr>";
        builtString += "<tr><td>German</td><td>" + document.getElementById("langDE").checked + "</td></tr>";
        
                
        tmp.innerHTML = builtString;
        tmp.style.border = "1px solid black";
        
        
        document.body.appendChild(tmp);
        
        return false;
    };

}

function person(firstname, lastname, phone, email) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.phone = phone;
    this.email = email;
}

function write(myArray, length) {
    var builtString = "";

    for (var i = 0; i !== length; i++) {
        builtString += "<tr>";
        builtString += "<td>" + myArray[i]['firstname'] + "</td>";
        builtString += "<td>" + myArray[i]['lastname'] + "</td>";
        builtString += "<td>" + myArray[i]['phone'] + "</td>";
        builtString += "<td>" + myArray[i]['email'] + "</td>";
        builtString += "</tr>";
    }

    console.log(builtString);
    document.getElementById("myPersons").innerHTML = builtString;
}