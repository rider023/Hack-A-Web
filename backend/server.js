import express from 'express' ; 
import dotenv from 'dotenv'

const app = express() ;


//todo Middlewares
app.use(express.json()) ;
dotenv.config() ; 


//todo Routes


//* Listners
const port = process.env.PORT || 5001
app.listen(port,()=>{
    console.log(`Server Listening on port ${port}`);
})


