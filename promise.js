

function getUser(id) {
    return new Promise((res,rej) => {
        setTimeout(() => {
            console.log("premier promise");
            res({id: id , email:"tawfik@gmail.com"})
            
        }, 2000);

    })
    
}
function getRepos() {
    return new Promise((res,rej) => {

       setTimeout(() => {

        console.log("deuxieme promise");
        rej('user not existe')
           
       }, 2000);

    })
    
}

getUser(12).then((user) => {
    console.log("my user :", user);
    return getRepos()
}).catch((x)=> {
    console.log("reject:", x);
})