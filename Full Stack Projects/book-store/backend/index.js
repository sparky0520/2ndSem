import express from "express";
import { PORT, mongoDBURL } from './config.js'
import booksRoute from "./routes/booksRoute.js";
import mongoose from "mongoose";
import cors from 'cors'

const app = express();

app.use(express.json())

// Allow users of all configurations
app.use(cors())

// Allow users of custom origin
// app.use(cors({
//     origin: "http://localhost:3000",
//     methods: ['GET','POST','PUT','DELETE'],
//     allowedHeaders: ['Content-Type']
// }));

app.use("/books",booksRoute)

app.get("/", (req, res) => {
    return res.status(200).send("Welcome to Book Store App !")
})

mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log('Database connected !');
        app.listen(PORT, () => {
            console.log(`http://127.0.0.1:${PORT}`);
        })
    })
    .catch(error => {
        console.log(error)
    })