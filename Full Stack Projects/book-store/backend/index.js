import express from "express";
import { PORT, mongoDBURL } from './config.js'
import { Book } from "./models/bookModel.js";
import mongoose from "mongoose";

const app = express();
app.use(express.json())

app.get("/", (req, res) => {
    return res.status(200).send("Welcome to Book Store App !")
})

// Add new book to db
app.post("/book", async (req, res) => {
    try {
        if (!req.body.title || !req.body.author || !req.body.publishYear) {
            return res.status(400).send({ message: "Send all required fields: title, author and publishYear !" })
        }
        const newBook = {
            title: req.body.title,
            author: req.body.author,
            publishYear: req.body.publishYear
        }
        const book = await Book.create(newBook)
        return res.status(201).send(book)
    } catch (err) {
        console.log(err)
        res.status(500).send({ message: err.message })
    }
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