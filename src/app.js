const express = require('express');
const path = require('path');
const app = express();
const mainRouter = require('./routes/routes')


app.use(express.static('public'))


app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "ejs");




const port = process.env.PORT || 3000; 
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
})

app.use(mainRouter);
