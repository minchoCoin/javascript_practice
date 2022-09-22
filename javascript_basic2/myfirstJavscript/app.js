function func(name){
    console.log("Hello! " + name);
    return 1;
}


const a=3;
let b=2;

console.log(a);
console.log(b);

const arr = [1,2,3,4,5];
arr.push(6);
arr.pop();
console.log(arr.length)
//arr.length();

const player ={
    name:"Nick",
    age:22,
    points:100,
    hello:function(yourname){
        console.log("hello! in object - " + yourname);
        return yourname;
    }
}

console.log(player.name);
player.name = "hello";
console.log(player.name);
yourname = player.hello("Donald");
console.log(yourname);
func("James")

//const age = prompt("how old are you? : ");

//console.log(age);