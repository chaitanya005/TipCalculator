
function calculateTip() {
  var billAmt = document.getElementById("billamt").value;
  var feedback = document.getElementById("Options").value;
  var numOfPeople = document.getElementById("people").value;

  
  if (billAmt === "" || feedback == 0) {
    alert("Please enter values");
    return;
  }
  
  if (numOfPeople === "" || numOfPeople <= 1) {
    numOfPeople = 1;
    document.getElementById("each").style.display = "none";
  } else {
    document.getElementById("each").style.display = "block";
  }

  
  //calculate Tip
  var total = (billAmt * feedback) / numOfPeople;
  total = Math.round(total * 100) / 100;
  total = total.toFixed(2);
  
  document.getElementById("totalTip").style.display = "block";
  document.getElementById("tip").innerHTML = total;

}


document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";


document.getElementById("calculate").onclick = function() {
  calculateTip();

};