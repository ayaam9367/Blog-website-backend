const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const {Blog} = require('./models/blog.js');
const blogRoutes = require('./routes/blogRoutes.js');
const path = require('path');


const app = express();

//connect to mongoDB
const dbURI = 'mongodb+srv://ayaam:ayaam1234@cluster0.bxeotu3.mongodb.net/nodejs_tutorial?retryWrites=true&w=majority&appName=Cluster0'
mongoose.connect(dbURI)
.then((result) => console.log('connected to DB'))
.then((result) => app.listen(3003))
.then((resullt) => console.log("app is running on port 3003"))
.catch((err) => console.log(err));

//register view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); //create an absolute path relative to the current script file.



//listen for requests -> can give it a object too for using websockets 
//app.listen(3003);


//middleware
// app.use((req, res, next) => {
//     console.log('new request made:');
//     console.log('host: ', req.hostname);
//     console.log('path: ', req.path);
//     console.log('method: ', req.method);
//     next();
// });

// static files
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({extended: true})); //takes all the urll data and parses it into workable format to pass it into req.body

//third part middleware
app.use(morgan('dev'));

//mongoose and mongo sandbox routes
// app.get('/add-blog', (req, res) => {
//     const blog = new Blog({
//         title: 'new blog',
//         snippet :'about my new blog',
//         body: 'more about my new blog'
//     });

//     blog.save()
//     .then((result) => {
//         res.send(result)
//     })
//     .catch((error) => {
//         console.log(error);
//     })
// })


// app.get('/all-blogs', (req, res) => {
//     Blog.find()
//     .then((result) => {
//         res.send(result);
//     })
//     .catch((error) => {
//         console.log(error);
//     })
// })

// app.get('/single-blog', (req, res) => {
//     Blog.findById('661b94de79d0dfa5ccfaa79a')
//     .then((result) => {
//         res.send(result);
//     })
//     .catch((error) => {
//         console.log(error);
//     })
// })
 

app.get('/', (req, res) => {
    //res.send infers the type of content we wanna send on its own and also infers the status code
    //res.send('<p>home page </p>')

    //res.sendFile('./views/index.html', {root: __dirname});

    // const blogs = [
    //     {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    //     {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    //     {title: 'How to defeat browser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    // ];

    // res.render('index', {title: 'Home', blogs: blogs});
    res.redirect('/blogs');
})
 
app.get('/about', (req, res) => {
    //res.sendFile('./views/about.html', {root: __dirname});
    res.render('about', {title: 'About'});
})

app.get("/about-us", (req, res) => {
    res.redirect('/about');
})


//  blog routes

app.use('/blogs', blogRoutes); //use this route only when url begins with /blogs

app.use((req, res) => {
    //res.status(404).sendFile("./views/4044.hrml", {root : __dirname});
    res.status(404).render('404', {title: '404'});
})