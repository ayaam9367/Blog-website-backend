const express = require('express');
const {Blog} = require('../models/blog.js');
//blog_index, blog_details, blog_create_get, blog_create_post, blog_delete

const blog_index = (req, res) => {
    Blog.find().sort({createdAt: -1})
    .then((result) => {
        res.render('index', {title: 'All Blogs', blogs: result})
    })
    .catch((error) => {
        console.log(error);
    })
}

const blog_details = (req, res) => {
    const id= req.params.id;
    Blog.findById(id)
    .then((result) => {
        res.render('details', {blog: result, title: 'Blog Details'})
    })
    .catch((error) => {
        console.log(error);
    })
}

const blog_create_get = (req, res) => {
    res.render('create', {title: 'Create a new Blog'});
}

const blog_create_post = (req, res) => {
    const blog = new Blog(req.body);
    blog.save()
    .then((result) =>{
        res.redirect('/');
    })
    .catch((error) => {
        console.log(error);
    })
}

const blog_delete = (req, res) => {
    const id = req.params.id;
    Blog.findByIdAndDelete(id)
    .then(result => {
        res.json({redirect: '/'});
    })
    .catch((error)=>{
        console.log(error);
    })
}


module.exports = {
    blog_index,
    blog_details,
    blog_create_get,
    blog_create_post,
    blog_delete
};