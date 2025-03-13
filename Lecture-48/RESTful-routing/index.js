

const { log } = require('console');
const express = require('express'); // function
const app = express(); //object
const path = require('path'); // node module already present
const methodOverride = require('method-override');

let comments = [ //array of objects
    {
        id : 0,
        username : 'sam',
        comment : 'a good mentor'
    },
    {
        id : 1,
        username : 'prince',
        comment : 'a good student'
    },
    {
        id : 2,
        username : 'raj',
        comment : 'a good friend'
    },{
        id : 3,
        username : 'pandey',
        comment : 'hey prabhu shree krishna jagannatham'
    }
]

app.set('view engine', 'ejs'); // engine
app.set('views',path.join(__dirname,'views')); // template
app.use(express.static(path.join(__dirname,'public'))); // public -> static file

//body parsing middlewares->
// app.use(express.json()) -> for json data
app.use(express.urlencoded({extended: true})) //-> for frm data

app.use(methodOverride('_method')); //method-overriding

//Restful route according to the restful table -> right to left
// Task-1 -> show all the comments  -> where all my comments -> DB -> Array

app.get('/comments', (req,res)=>{
    res.render('index', {comments})
})

// Task-2 -> show form for new comments
app.get('/comments/new', (req,res)=>{
    res.render('new')
})

// Task -> 3 to actually add the comment in DB/Array
app.post('/comments', (req,res)=>{
    console.log(req.body); // by default -> undefined -> to change i use middleware
    let {username, comment} = req.body;
    // comments.push({username:username, comment:comment, id:comments.length});
    comments.push({username, comment, id:comments.length}); //ES6 ka syntax hai
    // res.send(req.body)
    res.redirect('/comments') // get req gyi /comments pr
})

// Task->4 to show a particular comment in DB/Array -> req.params
app.get('/comments/:commentId', (req,res)=>{{
    // console.log(req.params);
    let{commentId} = req.params;
    let foundComment = comments.find((comment) => {
        // console.log(comment.id);
        // console.log(commentId);
        // return comment.id === commentId;
        // return comment.id == commentId;  //way->1
        return comment.id === parseInt(commentId);    //way->2
        
    })
    // console.log(foundComment);
    res.render('show' ,{foundComment});
    
}})

//Task->5 to show the edit form
app.get('/comments/:commentId/edit', (req,res)=>{
    let{commentId} = req.params;
    let foundComment = comments.find((comment) => {
        return comment.id === parseInt(commentId);   
        
    })
    res.render('edit', {foundComment});
})

// Task -> 6 to actualy edit in DB/Array
app.patch('/comments/:commentId', (req,res)=>{
    let{commentId} = req.params;
    let foundComment = comments.find((comment) => {
        return comment.id === parseInt(commentId);    
        
    })
    let {comment} = req.body; //post
    foundComment.comment = comment;
    res.redirect('/comments');
})

// Task ->7 to actualy delete from the DB/Array
app.delete('/comments/:commentId', (req,res)=>{
    let {commentId} = req.params;
    let newComments = comments.filter((comment) => {return comment.id != commentId})
    comments = newComments;
    res.redirect('/comments');
})

const PORT = 5050;
app.listen(PORT, ()=>{ //listener
    console.log(`server connected at port ${PORT}`);
})

