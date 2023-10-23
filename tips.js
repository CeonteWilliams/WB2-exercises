"use strict"

let TIPCALCULATOR = document.getElementById("TIP-CALCULATOR")

//define a submit event listener. This allows the form to be submitted when user submits it.
TIPCALCULATOR.onsubmit = function(event){
   event.preventDefault()
   let cost=(event.target.elements.cost.valueAsNumber)
   let percentage=(event.target.elements.percentage.valueAsNumber)
   let minimum=(event.target.elements.minimum.valueAsNumber)

   let tip = calculateTip(cost, percentage / 100, minimum)
   showmessage(tip)
}

function calculateTip (cost, tipPercentage, minTip) {
   if (cost < 0) {
       cost = 0
   }
   
   let tipAmount = cost * tipPercentage
   if (tipAmount < minTip) {
       tipAmount = minTip
   }
   
   let readableTipAmount = tipAmount.toFixed(2)
   return readableTipAmount
}




// sample inputs
//var foodcost = 79.25;
//var tax = 6.54;
//var tip = 12.00

//calculation
//var totalDue = foodcost + tax + tip

//output
//showmessage (
//  "food cost is" + foodcost + "and tax is" + tax);
//showmessage ("tip is" + tip.toFixed(2));
//showmessage ("total due is"  + totalDue);



function showmessage(message) {
   let imageUrl = "https://illlustrations.co/static/e94035d022bd5eda7164586ca1294515/122-work-from-home-2.svg"
   let messagediv = document.getElementById("message");
   messagediv.innerHTML = `
      <div class="card" style="width: 18rem;">
         <img src="${imageUrl}">
         <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">${message}</p>
         </div>
      </div>
   `;
}
