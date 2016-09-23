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
    var lis = document.getElementsByTagName("li");
    
    for(var i = 0; i !== lis.length; i++) {
        lis[i].onclick = function() {
            console.log(this.innerHTML);
        };
    }
}