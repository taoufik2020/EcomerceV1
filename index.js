const express = require('express')
const app = express()
const logged = require('./middlwar/middlware')
const couress = require('./router/coures')
const home = require('./router/home')
const mongoose = require('mongoose')
//const cors = require('cors')
//app.use(cors())
/*mongoose.connect('mongodb://localhost/base')
.then(()=> console.log("connectes"))
.catch((err)=> console.log('not connected0'))

const coureSchema = mongoose.Schema({
    name: {
          type: Number
          
    },
    Completed: Boolean,
    
    date: { type: Date , default : Date.now}
})

const Coure = mongoose.model('Coure', coureSchema);

/*Coure.findById('5f986021af702e0768c60323').then((result) => {
  
    let x = result 
    x.name = "modified"
    x.save().then((x) => {
        console.log("objet modifier", x );
    })

})*/

//console.log("cccccccccccccc",  Coure().name);
/*async function persist(){

    
    console.log("c:",x);
}
persist()*/
/*const c = new Coure( {
    name: "cloud",
    Completed: true,
    prenom:"mokhtar"
})

c.save().then((coures)=> {
    console.log("coures persiste is:",coures);
}).catch((err) => {
    console.error(err.message)
})*/
 /*  let x ;
Coure.find()
.or([{name: "angular" } , {Completed: true}])
.then((result) => {
        x = result
        console.log("object",x);
    })*/


    
    
    

//console.log("mongocoure", c);

app.use(express.json())
app.use(logged.middll)
app.use(express.static('public'))
app.use((req,res,next)=> {

    console.log("welcome")
    
    next()
})

app.use('/api/coures',couress)
app.use('',home)


// connection with database 

mongoose.connect('mongodb://localhost/test')
.then(()=> console.log('connection avec succe'))
.catch(() => console.log('problem with connection'))

 // créer mon premier collection 

const users = new mongoose.Schema({

     name: {
         type: String,
         trim: true
     },
     prenom: {
         type: String,
         trim: true
     },
     age: {
         type: Number
     },
     date: {
         type: Date,
         default: Date.now
     }

})

const role = mongoose.model('Role',users)

 
const port = process.env.PORT || 5000

const u = new role({
    name: ' tababi       ',
    prenom: 'taoufik',
    age: 27
})
u.save()
.then((data)=> console.log(data))
.catch((error) => console.error(error))
app.listen(port,()=> console.log(`server run in port ${port}`))