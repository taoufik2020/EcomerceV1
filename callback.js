

console.log("befor");

getUser(25,(user)=> {
    console.log(user);
},(x)=> {
    console.log(x);
})


console.log("after");

function getUser(id,callback, cal) {
    setTimeout(() => {
        console.log("started")
         
         callback(50);
         cal(90)
        
    }, 2000);
}



