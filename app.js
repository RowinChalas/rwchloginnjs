
const exp = require('express')

const app = exp();
const port = process.env.PORT || 3000;


app.use(exp.static(__dirname+"/public"))

app.set('view engine','ejs');
app.set('views', __dirname+"/views");



//Rutas render
app.get('/dinamicRender',(req,res)=>{
        res.render("index",
        {
                titulo:"Renderizado de pagina dimanica"
        });
})

//rutas
app.get('/',(req,res)=>{
        res.send("hello world")
});

app.get('/servicio',(req,res)=>{
       // console.log(__dirname);
      //  res.send({"m":"estas en el area de sergvicio"});

      res.render("servicio");
})

app.use((req,res,next)=>{
        //res.status(404).sendFile(__dirname+"/public/404.html");
        res.render("404",
       {
               titulo:"Pagina no Encontrada",
               descripcion:"Esta pagina no esta en el directorio de paginas"
        });
})


//app.use(exp.static(__dirname+"/public"))

app.listen(port,()=>{
   console.log("Servidor a la escucha");
});





/*const f = require('./frutas.js').frutas;
const dinero = require("./frutas").dinero;


f.forEach(item=>{
        console.log(item)
})
console.log("----------------------");
console.log(dinero);*/