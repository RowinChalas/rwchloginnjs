const express = require('express');
const router = express.Router();



router.get('/',(req,res)=>{
    res.render("mascotasView",{
        arrayMascota:[
            {id:"DR-1",nombre:"Mia",Descripcion:"descripcion Mia"},
            {id:"DR-2",nombre:"Peluche",Descripcion:"descripcion Peluche"}
        ]
    });
})


module.exports = router;