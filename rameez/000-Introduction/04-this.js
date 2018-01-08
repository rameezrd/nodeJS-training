var Jerry = {
 printFirstName: function(){
     console.log("My first name is Jerry");
     console.log(this === Jerry ); 
 }
};
Jerry.printFirstName();

//The default calling context is global
function doSomethingWorthless(){
    console.log("\nI am worthless");
    console.log(this === global);
}
doSomethingWorthless();