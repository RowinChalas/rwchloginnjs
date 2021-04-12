const express = require('express')
const router = express.Router();

router.get('/',(req,res)=>{
    //res.send("hello world")
    res.render("index",
    {
            titulo:"Bienvenido a mi pagina"
    });
});

router.get('/servicio',(req,res)=>{
   // console.log(__dirname);
  //  res.send({"m":"estas en el area de sergvicio"});

  res.render("servicio");
})
// ruta render
router.get('/dinamicRender',(req,res)=>{
  res.render("index",
  {
          titulo:"Renderizado de pagina dimanica"
  });
})


module.exports = router;

