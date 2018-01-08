function User(){
    this.name = "";
    this.life = 100;
    this.giveLife = function giveLife(targetplayer){
        targetplayer.life += 1
        console.log(this.name + " gave 1 life to " + targetplayer.name);

    }
}
var Tom = new User();
var Jerry = new User();

Tom.name = "Tom";
Jerry.name = "Jerry";

Tom.giveLife(Jerry);
console.log("Tom: " + Tom.life);
console.log("Jerry: " + Jerry.life);

//you can add functions to all objects
User.prototype.Uppercut = function Uppercut(targetplayer){
    targetplayer.life -= 3
    console.log(this.name + " hit Uppercut to " + targetplayer.name);
};
Jerry.Uppercut(Tom);
console.log("Tom: " + Tom.life);
console.log("Jerry: " + Jerry.life);

//you can add properties to all objects
User.prototype.magic = 60;
console.log( Tom.magic);
console.log(Jerry.magic);