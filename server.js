import express from 'express';
import bodyParser from 'body-parser';
import path from 'path'

const __dirname = path.resolve();
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));


app.listen(3000, ()=>{
console.log("The server is up and running at port 3000...");
});