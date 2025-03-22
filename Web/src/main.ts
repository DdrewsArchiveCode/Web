import express, {json, Request, Response} from 'express';
import {register, login} from './auth';
import cookieParser from "cookie-parser";

const app = express();
app.use(json());
app.use(cookieParser());

const sessionDuration = 2*60*60*1000; //2 hours session

app.post("/register", (req:Request, res:Response) => {
    const {userName, email, password} = req.body;
})

app.post ("/login", (req: Request, res:Response) => {
    
})
