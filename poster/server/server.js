const express = require('express');
const mongoose = require('mongoose');
const app  = express();
const Post= require('C:/Users/gab_f/OneDrive/Desktop/projetos2/node/node/poster/models/post.js')

const dbURL="mongodb+srv://gabs:gabs1234@posterdb.12srgts.mongodb.net/postcl?retryWrites=true&w=majority&appName=PosterDB"
mongoose.connect(dbURL)
    .then((result)=> app.listen(3000, "192.168.1.101"))
    .catch((err)=> console.log(err))
;

app.use(express.urlencoded({extended:true}));

app.post('/Post', (req, res)=>{
    console.log(req.body);
})



app.get("/add-post", (req,res)=>{
    const post = new Post({
        title:"folasdfasfasdfasdfhas",
        text:"saiasfasdf",
        img:"dsaod"
    });
    post.save()
        .then((result)=>{
            res.send(result);
        })
        .catch((error)=>{
            console.log(error);
        })
})

app.get('/all-blogs', (req,res)=>{
    Post.find()
        .then((result)=>{
            res.send(result);
        })
        .catch((error)=>{
            console.log(error)
        })
})

const root= 'C:/Users/gab_f/OneDrive/Desktop/projetos2/node/node/poster/views'

app.use(express.static(root));



/*
app.get('/',(req, res)=>{
    res.sendFile(root);
});*/

app.get('/all',(req, res)=>{
    res.send("<h1>hello to all</h1>");
});