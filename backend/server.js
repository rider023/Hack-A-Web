import express from 'express';
import dotenv from 'dotenv';
import { connectdb } from './db/connectDb.js';
import { userSignin, userSignup } from './controllers/userAuth.js';
import { doctorSignin, doctorSignup } from './controllers/doctorAuth.js';
import { getDoctors } from './controllers/getDoctors.js';

const app = express();

//todo Middlewares
app.use(express.json());
dotenv.config();

connectdb();

//todo Routes
app.post('/user/signup', userSignup);
app.post('/user/signin', userSignin);
app.post('/doctor/signup', doctorSignup);
app.post('/doctor/signin', doctorSignin);

app.get('/doctors', getDoctors);
app.get('/doctor/:id') ; 
app.get('/user/:id') ;

//* Listners
const port = process.env.PORT || 5001;
app.listen(port, () => {
  console.log(`Server Listening on port ${port}`);
});
