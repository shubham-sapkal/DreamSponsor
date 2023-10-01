import ErrorHandler from "../middlewares/error.js";

import { Post } from "../models/post.js"

export const createPost = async(req, res, next) => {

    const { title, desc } = req.body;

    try {

        const post = await Post.create({
            title,
            desc,
            user: req.user._id
        });

        res.status(200).send({
            postID: post._id,
            title: post.title,
            description: post.desc,
            createTime: post.created_at
        });

    }
    catch(error){
        next(error);
    }

};

export const getAllPost = async(req, res, next) => {

    try {

        const posts = await Post.find({});

        res.status(200).json({
            posts
        });

    } catch(error) {
        next(error);
    }

}

export const likePost = async(req, res, next) => {

    const { id } = req.params;

    try {

        const post = await Post.findById(id);

        post.likes = post.likes+1;

        await post.save();

        res.status(200).json({
            success: true,
            message: "Post Linked!"
        });

    } catch(err){
        next(err);
    }

}

export const unlikePost = async(req, res, next) => {

    const { id } = req.params;

    try {

        const post = await Post.findById(id);

        if(post.likes != 0){

            post.likes = post.likes - 1;

            await post.save();
        }

        res.status(200).json({
            success: true,
            message: "Post Dislinked!"
        });

    } catch(err) {
        next(err);
    }

}


export const addInvester = async(req, res, next) => {

    const { id } = req.params;

    const { user, investedAmt } = req.body;

    try {

        const post = await Post.findById(id );

        if(!post) {
            return next(new ErrorHandler("Post Not Found!", 404));
        }
    
        post.investers.push({
            user,
            invested_amt: investedAmt
        });

        post.totalInvestment = post.totalInvestment + investedAmt;

        await post.save();

        res.status(200).json({
            success: true,
            message: "Investment Added"
        });

    } catch (err) {
        next(err)
    }

}