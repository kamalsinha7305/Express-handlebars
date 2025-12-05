///import express from 'express'
//const app=express();
const express =require('express')
const router=express.Router()
const path=require('path')
const blogs=require('../data/blogs')

router.get('/',(req,res)=>{

    //res.sendFile(path.join(__dirname,"../template/index.html"))
    res.render('home');

})


router.get('/blogs',(req,res)=>{
    /* blogs.forEach(e => {
        console.log(e.title)
        
    }); */
    //res.sendFile(path.join(__dirname,"../views/blogHome.html"))
    res.render('bloghome',{
        blogs:blogs

    })

})


router.get('/blogspost/:slug',(req,res)=>{
    
   myblogs= blogs.filter((e) => {
        return e.slug == req.params.slug
    } )
    console.log(myblogs)
    res.render('blogpage',{
        title:myblogs[0].title,
        content:myblogs[0].content
    })
   //res.sendFile(path.join(__dirname,"../views/blogpost.html"))
})
module.exports =router