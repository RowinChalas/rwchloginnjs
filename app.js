
const exp = require('express')

const app = exp();
const port = process.env.PORT || 3002;


app.use(exp.static(__dirname+"/public"))

app.set('view engine','ejs');
app.set('views', __dirname+"/views");




//Rutas render
//rutas
app.use('/',require('./router/RutasWeb'));

app.use("/mascotas",require("./router/Mascotas"));

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