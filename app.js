//import express from "express"


const express= require('express')
const path=require('path')


//import { create } from 'express-handlebars';
const {create}= require('express-handlebars');

const app=express();
const hbs = create({});

// Register `hbs.engine` with the Express app.
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('views', './views');

const PORT=3000



app.use(express.static(path.join(__dirname,"static")))
app.use('/',require(path.join(__dirname,'routes/blog')))

app.listen(PORT,()=>{
    console.log(`Server is running at ${PORT} port`);
})

