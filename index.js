const express = require('express')
const app = express()

const questions = [
    {
        question:"how to install Java",
        slug:"how to install Java",
        votes:3,
        views:10,
        tags:"Java, query"
    },
    {
        question:"how to install Python",
        slug:"how to install Python",
        votes:3,
        views:10,
        tags:"Python, query"
    },
    {
        question:"how to install React",
        slug:"how to install React",
        votes:3,
        views:10,
        tags:"React, query"
    },
    {
        question:"how to install MySQL",
        slug:"how to install MySQL",
        votes:3,
        views:10,
        tags:"MySQL, query"
    }
]

const users = [

    {
        name:"SD",
        followers:100,
        location:"HYD"
    },
    {
        name:"SD1",
        followers:1000,
        location:"HYD1"
    },
    {
        name:"SD2",
        followers:10000,
        location:"HYD2"
    },
    {
        name:"SD3",
        followers:100000,
        location:"HYD3"
    }
]

app.get('/',(req,res)=>{
    res.send("Home")
})

app.get('/questions',(req,res)=>{

    res.send(questions)
})

app.get('/questions/:slug',(req,res)=>{
    console.log(req.params.slug)
    const slug = req.params.slug
    questions.map(obj=>{
        if (obj.slug === slug){
            res.send(obj)
        }
    })
   res.send("Question not Found")
})


app.get('/users',(req,res)=>{
    res.send(users)
})

app.get('/tags',(req,res)=>{
    res.send("Tags")
})

app.get('/jobs/companies',(req,res)=>{
    res.send("Companies")
})


app.listen(1026,()=>{
    console.log("Listening...")
})