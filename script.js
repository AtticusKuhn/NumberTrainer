var slider = document.getElementById("myRange");
var check = document.getElementById("countaid");
var points = 0;
var cap = 10


check.oninput = function(){
  try{ if(document.getElementById("countaid").checked == true){
   document.getElementById("countcont1").style.display = "block";
document.getElementById("countcont2").style.display = "block";

  }else{
  document.getElementById("countcont1").style.display = "none";
document.getElementById("countcont2").style.display = "none";
  }
  }catch{}
}

slider.oninput = function() {
   cap = this.value;
}
function newques(){
 try{
   for(t=1;t<num1+1; t++){
  document.getElementById("Div1").remove();
  }  
 }catch{}
  try{
   for(t=1;t<num2+1; t++){
  document.getElementById("Div2").remove();
  }  

 }catch{}
 try{
   for(p=1;p<5;p++){
   for(t = 1;t<5;t++){
  document.getElementById(t).removeEventListener("click",function() { wrong()});
  document.getElementById(t).removeEventListener("click", function() { right()}
  );
}
   }
} catch{}
 num1 = Math.floor((Math.random() * cap) + 1);
 num2 = Math.floor((Math.random() * cap) + 1);

for(t=1;t<num1+1; t++){
  
  var counter1 = document.createElement("DIV"); 
  
counter1.innerHTML = ` ⚫ `; 
counter1.setAttribute("id", "Div1");                 
document.getElementById("countcont1").appendChild(counter1);

}
for(t=1;t<num2+1; t++){
  var counter2 = document.createElement("DIV"); 
counter2.innerHTML = ` ⚫ `; 
counter2.setAttribute("id", "Div2");                 
document.getElementById("countcont2").appendChild(counter2);

}

document.getElementById("ques").innerText = `${num1} + ${num2}`
var corans = Math.floor((Math.random() * 4) + 1)
document.getElementById(corans).innerText = num1+num2;
document.getElementById(corans).addEventListener("click", function() { right()},{
  once: true
});
console.log("right")
for(t=1;t<5;t++){
  if(t !== corans){
    if(Math.floor((Math.random() * 2) + 1)>1){
       wrongans = Math.floor(Math.random() *(num1+num2) );
    }else{
    wrongans = Math.floor(Math.random() *(20-(num1+num2) ) +num1+num2+2 );
    }

    document.getElementById(t).innerText = `${wrongans}`;
    document.getElementById(t).style.display= "block";
    document.getElementById(t).addEventListener("click", function() { wrong()},{
  once: true
});
     document.getElementById(t).addEventListener("click", function() {disappear(t)}, {
  once: true
});
  }
}

}
function disappear(t){
  document.getElementById(t).style.display= "none";
}
newques();

function wrong(){
  document.getElementById("result").innerHTML = 'You are wrong';
  document.getElementById("result").style.display = "block";
  document.getElementById("result").style.backgroundColor = "red";
  console.log("wrong");
  setTimeout(function(){ document.getElementById("result").style.display = "none"; }, 3000);
}



function right(){
   document.getElementById("result").style.display = "block";
  document.getElementById("result").style.backgroundColor = "green";
  newques();
  points++;
  var x = document.getElementById("allstar"); 


  x.play(); 



  document.getElementById("point").innerText = `${points} points`
   var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
       console.log(xhttp.responseText);
       resp = xhttp.responseText;
         var btn = document.createElement("IMG");   // Create a <button> element
btn.src = resp;
btn.style.width = "200px";
btn.style.height = "200px";
                   // Insert text
                   
document.getElementById("col2").appendChild(btn)
       document.getElementById("resimg").src = xhttp.responseText;
    }
};
xhttp.open("GET", "https://Lego-images.atticuskuhn.repl.co", true);
xhttp.send();
  document.getElementById("result").innerHTML = 'You are right<img id  = "resimg">';
 
  console.log("coorect");

 



  setTimeout(function(){
  x.pause();  document.getElementById("result").style.display = "none"; }, 3000);
; 



}


