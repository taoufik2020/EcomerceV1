const express = require('express')
const router = express.Router();
//router.use(express.json())
const cors = require('cors')
router.use(cors())
const joi = require('joi')

var coures = [
    {id:1,titre:"angular"},
    {id:2,titre:"reacte"},
    {id:3,titre:"spring boot"}

]

router.get('/',(req,res)=> {
    
    res.send(coures)


})

router.delete('/:id',(req,res)=>{

    let coure = coures.find(x => x.id === parseInt(req.params.id))

   
    if(!coure) {
          
        res.status(404).send('coures not existe')

    } else {
        index = coures.indexOf(coure)
        //newcoure = coures.filter(w => w.id != parseInt(req.params.id))
        coures.splice(index,1)
        res.status(204).send({})
    }
    





 })
 router.post('/',(req,res)=> {
           
    
            
          let {error, value} = validCoure(req.body)
          if(error){
              res.status(400).send(error.details[0].message)
          }
         else {
              const c = {
                      id: coures.length + 1,
                      titre: value.titre

                        }
         coures.push(c)
   res.send(c)
        }




 })

 function validCoure(params) {
    const schema = joi.object({
        titre: joi.string().alphanum().min(3).max(12).required()
    })
    return schema.validate(params)
     
 }
 

 module.exports = router ;
 //master change