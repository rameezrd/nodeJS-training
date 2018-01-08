function placeAnOrder(OrderNumber){
    console.log("Customer Order:",OrderNumber)

    cookAndDiliveredFood(function() {
        console.log("Dilivered Food Order:",OrderNumber)        
    });
}
//simulate a five second operation
function cookAndDiliveredFood(callBack){
    setTimeout(callBack, 5000);
}
//simulate users web request
placeAnOrder(1);
placeAnOrder(2);
placeAnOrder(3);
placeAnOrder(4);
placeAnOrder(5);
placeAnOrder(6);
placeAnOrder(7);
