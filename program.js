// var form = document.getElementById("myForm");
// function handleForm(event) { event.preventDefault(); } 
// form.addEventListener('submit', handleForm());


// function asba() {
//     document.getElementById("result1").innerHTML = 'ye miboun';
// }
 //document.getElementById("calculate1").addEventListener("click", grossPay);
function grossPay(hourlyPay, totalHours) {
    //var hp = document.getElementById("hourlyPay").contentEditable;
    //var th = document.getElementById("totalHours").contentEditable;
    if (totalHours <= 40) {     
        document.getElementById("result1").innerHTML =(totalHours * hourlyPay);    
    } else
    document.getElementById("result1").innerHTML = (totalHours - 40) * (hourlyPay * 1.5) + (40 * hourlyPay);   
}
//console.log('asba lik');
//document.getElementById("calculate1").addEventListener("click", grossPay());

//console.log(grossPay());
//console.log('hello jappa')
//document.getElementById("result1").innerHTML = grossPay();

// function grossPay() {
//     var hp = document.getElementById("hourlyPay").Value;
//     var th = document.getElementById("totalHours").Value;
//     if (th != null) { 
//         return true
        
//     }
// }
// document.getElementById("result1").innerHTML = grossPay();
// window.onload= function (){
//     function asba() {
//              document.getElementById("result1").innerHTML = 'ye miboun';
//          }
//         }        
//         ` `