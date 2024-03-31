import express from "express";
import { Book } from "../models/bookModel.js";

const router = express.Router();

//Get all books
router.get('/',async (req,res) => {
    try{
        const books =  await Book.find({})
        return res.status(200).json({
            count: books.length,
            data: books
        })
    }catch (err) {
        console.log(err.message)
        return res.status(500).send({message: err.message})
    }
})

// Finding a specific book by id
router.get('/:id',async (req,res) => {
    try{
        const id = req.params.id
        const book =  await Book.findById(id)
        if(!book){
            return res.status(404).send({message: "Book not found."})
        }
        return res.status(200).json(book)
    }catch (err) {
        console.log(err.message)
        return res.status(500).send({message: err.message})
    }
})

// Update a particular book
router.put("/:id", async (req,res) => {
    try{
        if(!req.body.title || !req.body.author || !req.body.publishYear){
            return res.status(404).send({
                message: "Send all required fields: title, author, publishYear"
            })
        }
        const {id} = req.params
        const result = await Book.findByIdAndUpdate(id,req.body)

        if(!result){
            return res.status(404).json({message: "Book not found."})
        }
        return res.status(200).send({message: "Book Successfully Updated."})

    }catch(err){
        console.log(err.message)
        res.status(500).send({message: err.message})
    }
})

// Delete a book of a specific ID
router.delete("/:id", async (req,res) => {
    try{
        const {id} = req.params
        const result = await Book.findByIdAndDelete(id);
        if(!result){
            return res.status(404).send({message: "Book not found."})
        }
        return res.status(200).send({message: "Book deleted successfully."})
    }catch(err){
        console.log(err.message)
        return res.status(500).json(err.message)
    }
})

// Add new book to db
router.post("/", async (req, res) => {
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

export default router;