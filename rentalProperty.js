


function background_change_for_service_request(){
  document.body.style.background = "url(https://i.postimg.cc/0NsRCDsM/service-request-button-lg-nonglow.jpg)  no-repeat"; 
  document.body.style.backgroundSize = "274px 269px"; 
  document.body.style.backgroundPosition = "center center";
  document.body.style.color = "black";    
}

function background_original(){
    document.body.style.background = "url(https://i.postimg.cc/cL7ZGhMm/front-door-para.jpg) no-repeat";
   
////    height: 800px;
    document.body.style.backgroundSize = "cover";
    document.body.style.zIndex = "-1";  
    document.body.style.color = "whitesmoke"; 
    
}



function removeTextCharacters(){
    document.getElementById("information").innerHTML = " ";
    
    var textCharacter = document.getElementById("information").value;
    console.log(textCharacter);
//  document.getElementById("demo").innerHTML = x;
}

document.getElementById("form_interior").style.display = "none";
document.getElementById("form_exterior").style.display = "none";
document.getElementById("service_cancel").style.display = "none";

const monthly_rent_amount = 2500;

// Create array for each 1st of the month (represents payment due on the first of each month).

const month = new Array();
  month[0] = "January";
  month[1] = "February";
  month[2] = "March";
  month[3] = "April";
  month[4] = "May";
  month[5] = "June";
  month[6] = "July";
  month[7] = "August";
  month[8] = "September";
  month[9] = "October";
  month[10] = "November";
  month[11] = "December";

const currentDate = new Date();
console.log(currentDate.getDate());

const currentMonth = month[currentDate.getMonth()];
const currentDay = currentDate.getDay();

const todayIs = currentDate.getDate();
const currentYear = currentDate.getFullYear();
var amOrPm;


// use for 1 to 24 hours
//const currentHour = currentDate.getHours();

// use for 1 to 12 hours
var currentHour = currentDate.getHours();
if (currentHour > 12) {
    currentHour -= 12;
    amOrPm = 'PM';
} else if (currentHour === 0) {
   currentHour = 12;
    amOrPm = 'AM';
}

const currentMinute = currentDate.getMinutes();




const paymentTimeStamp = "Payment date: " + currentMonth + " " + todayIs + ", " + currentYear + " and time: " + currentHour + ":" + currentMinute + " " + amOrPm;

// Create late fee if payment is received after the 3rd day
const lateFee = currentDate >= 3;
const lateFee_Charge = 150;
const rent_incurred_latefee = monthly_rent_amount + lateFee_Charge;
//console.log(lateFee);

var interior_request = ["living_room"];
var interiorRequestLength = interior_request;
var comment_field = document.getElementById('info').hidden = true;

//  var d = new Date();
document.getElementById("date_due_payment").innerHTML = currentMonth + " 1st";

// Rent amount

document.getElementById("rent_amount").innerHTML = monthly_rent_amount;

function getInputValue(){  
var number=document.getElementById("number").value;
    if(number==monthly_rent_amount && lateFee == true){
        document.getElementById("payment_balance").innerHTML = (number - monthly_rent_amount) + lateFee_Charge + " Late fee amount due";

    }else if(number==rent_incurred_latefee && lateFee == true){
        document.getElementById("payment_balance").innerHTML = "Rent plus late fee paid: " + (rent_incurred_latefee - rent_incurred_latefee);
        document.getElementById("timeStamp").innerHTML = paymentTimeStamp;

    }else if(number>monthly_rent_amount){
        document.getElementById("payment_balance").innerHTML = "Overpayment received: +" + (number - monthly_rent_amount);
        
    }else if(number<monthly_rent_amount){
        document.getElementById("payment_balance").innerHTML = "Underpayment received: " + (number - monthly_rent_amount);
        
    }else{
        document.getElementById("payment_balance").innerHTML = "Payment made in full";
        document.getElementById("timeStamp").innerHTML = paymentTimeStamp;
    }   
}

// show the comment field once the function is called
function showCommentField(){
    document.getElementById('info').hidden = false;
    }

function commentFieldShow(){
    document.getElementById('info').hidden = true;
}

//When the user checks service requests; the selection(s) (interior and exterior) will appear
function interior_checked_selections(){
    document.getElementById("form_interior").style.display = "block";
    document.getElementById("service_cancel").style.display = "block";

    background_change_for_service_request();
}

function exterior_checked_selections(){
    document.getElementById("form_exterior").style.display = "block";
    document.getElementById("service_cancel").style.display = "block";

    background_change_for_service_request();
}

//When the user unchecks service requests; the selection(s) will be removed from the screen
function interior_unchecked_selections(){
  document.getElementById("form_interior").style.display = "none";
  document.getElementById("service_cancel").style.display = "none";
  commentFieldShow();    
  background_original();
}

function exterior_unchecked_selections(){  
  document.getElementById("form_exterior").style.display = "none";
  document.getElementById("service_cancel").style.display = "none";  
  commentFieldShow();
  background_original();
}

/*
ISSUES:
- When I click:
<button onclick="interiorFunction()">Click this</button> and
<button onclick="exteriorFunction()">Click this</button>
the forms disappear from the screen in which this is not suppose to happen

Didn't work:
-tried setting the checked boxes to true and display block
example:
document.getElementById("other").checked = true;
    document.getElementById("form_interior").style.display = "block";
    
RESOLVED (ADDED type="button" in HTML):
<!-- type="button" resolved the button of the page resetting when I click the button-->

*/

function interiorFunction(){
//   document.getElementById("bathroom").checked == interiorRequestLength;
    
    document.getElementById("bathroom") == "interior_request";
          console.log("Bathrom"); 
    }

//  Due payment date
  
function check_Interior() {
  document.getElementById("interiorCheck").checked = true;
  document.getElementById("interior_service_request").innerHTML = "Service request for interior";  
  interior_checked_selections();
}

function uncheck_Interior() {
  document.getElementById("interiorCheck").checked = false;
  document.getElementById("interior_service_request").innerHTML = "";
  interior_unchecked_selections();    
}

function check_Exterior() {
  document.getElementById("exteriorCheck").checked = true;
  document.getElementById("exterior_service_request").innerHTML = "Service request for exterior";
  exterior_checked_selections();    
}

function uncheck_Exterior() {
  document.getElementById("exteriorCheck").checked = false;
  document.getElementById("exterior_service_request").innerHTML = "";
  exterior_unchecked_selections();    
}



function myInteriorFunction() {
  var interior = document.forms[0];  
  var txt = "";
  var i;
  for (i = 0; i < interior.length; i++) {
    if (interior[i].checked) {
      txt = txt + interior[i].value + " ";
    }if(interior[i].value =="other" && interior[i].checked){
        showCommentField();
        console.log("Other selected"); 
    }
      document.getElementById("interiorOrder").value = "You ordered service request for: " + txt;       
}
}

function myInteriorSubmit() {
  var txt;
  if (confirm("Press to confirm interior request!")) {
    txt = "Interior order submitted!";
  } else {
    txt = "You pressed Cancel!";
  }
  document.getElementById("interior_order_submitted").innerHTML = txt;
}
  
function myExteriorFunction() {
  var exterior = document.forms[1];    
  var txt = "";
  var j;
  for (j = 0; j < exterior.length; j++){ 
    if (exterior[j].checked) {
      txt = txt + exterior[j].value + " ";
  }if(exterior[j].value =="other" && exterior[j].checked){
        showCommentField();
        console.log("Other selected"); 
    }
  document.getElementById("exteriorOrder").value = "You ordered service request for: " + txt;
}
}

function myExteriorSubmit() {
  var txt;
  if (confirm("Press to confirm exterior request!")) {
    txt = "Exterior order submitted!";
  } else {
    txt = "You pressed Cancel!";
  }
  document.getElementById("interior_order_submitted").innerHTML = txt;
}


function cancel(){
   uncheck_Interior();
   uncheck_Exterior();    
}



      
