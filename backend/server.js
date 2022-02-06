import express from 'express';
import dotenv from 'dotenv';
import { connectdb } from './db/connectDb.js';
import { userSignin, userSignup } from './controllers/userAuth.js';
import { doctorSignin, doctorSignup } from './controllers/doctorAuth.js';
import { getDoctors } from './controllers/getDoctors.js';
import { authenticateToken } from './controllers/authenticateToken.js';
import { getDoctor, getUser } from './controllers/getById.js';
import { consultdoctor } from './controllers/consultDoctor.js';
import cors from 'cors'

const app = express();

//todo Middlewares
app.use(express.json());
app.use(cors("*"))
dotenv.config();

connectdb();

//todo Routes
app.post('/user/signup', userSignup);
app.post('/user/signin', userSignin);
app.post('/doctor/signup', doctorSignup);
app.post('/doctor/signin', doctorSignin);
app.post('/user/consultdoctor',authenticateToken,consultdoctor)

app.get('/doctors', getDoctors);
app.get('/doctor', authenticateToken, getDoctor);
app.get('/user', authenticateToken, getUser);

//* Listners
const port = process.env.PORT || 5001;
app.listen(port, () => {
  console.log(`Server Listening on port ${port}`);
});
