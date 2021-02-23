const router = require('express').Router();
const Post = require('../models/postModels')

router.post('/', async (req, res)=>{
    // retrieve data from request
    const {
        title, 
        writtenContent, 
        createdAt, 
        tags, 
        selectedFile, 
        likeCount
    } = req.body;

    // construct the post model
    const newPost = new Post({
        title, 
        writtenContent, 
        createdAt, 
        tags, 
        selectedFile, 
        likeCount
    });

    // save post model

    try{
        const savedPost = await newPost.save();
        res.json(savedPost)
    }
    catch(err){
        console.error(err);
    }
    
})

router.get('/', async (req, res)=>{
    const posts = await Post.find();
    res.json(posts);
})

router.get('/:id', async (req, res)=>{
    const post = await Post.findById(req.params.id);
    res.json(post);
})

module.exports = router;