function getUser(id){

    return new Promise((res,rej) => {
           
        rej({id:id,title:"hgggg"})


    })
}


async function run (){

   
   try {
    await  getUser(25)
       
   } catch (error) {
       console.log(error);
   } 
    

}
 run()
 console.log("fin du programme");