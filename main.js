let C = 0;
let K = 0;
let F = 0;


function convertir(e) {
   if (e.target.name == "Fahrenheit-a-Celsius") {

       F = document.getElementById("monto").value;
       C = (F - 32) * 5 / 9;
       document.getElementById("mensaje").innerHTML = ("Celsius: " + C);
       document.getElementById("boton").onclick = function(){
           convertir(e);
       }

   }

   //Fahrenheit a Kelvin 
   else if (e.target.name == "Fahrenheit-a-Kelvin") {

       F = document.getElementById("monto").value;
       K = ( F - 32) * 5/9 + 273.15;
       document.getElementById("mensaje").innerHTML = ("Kelvin: " + K);
       document.getElementById("boton").onclick = function(){
           convertir(e);
       }

   }
   //Celsius a Fahrenheit  
   else if (e.target.name == "Celsius-a-Fahrenheit") {

   
       C = document.getElementById("monto").value;
       F = C * 9 / 5 + 32;
       document.getElementById("mensaje").innerHTML = ("Fahrenheit: " + F);
       document.getElementById("boton").onclick = function(){
           convertir(e);
       }
   }

   //Celsius a Kelvin 
   else if (e.target.name == "Celsius-a-Kelvin") {

       
       C = document.getElementById("monto").value;
       K = C+273;

       document.getElementById("mensaje").innerHTML = ("Kelvin: " + K);
       document.getElementById("boton").onclick = function(){
           convertir(e);
       }

   }

   //Kelvin a Fahrenheit   
   else if (e.target.name == "Kelvin-a-Fahrenheit") {

       
       K = document.getElementById("monto").value;
       F = (K - 273) * 9 / 5 + 32;
       
       document.getElementById("mensaje").innerHTML = ("Fahrenheit: " + F);
       document.getElementById("boton").onclick = function(){
           convertir(e);
       }

   }

   //Kelvin a Celsius 
   else {
       
       K = document.getElementById("monto").value;
       C = K - 273;
       
       document.getElementById("mensaje").innerHTML = ("Celsius: " + C);
       document.getElementById("boton").onclick = function(){
           convertir(e);
       }
   }
}