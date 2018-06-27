'use strict'

//Bring in model
const Post= use('App/Models/Post')

class PostController {
    async index({ view }) {
        // const posts = [
        //     { title: 'Post one', body: 'This is the body one'},
        //     { title: 'Post two', body: 'This is the body two'},
        //     { title: 'Post three', body: 'This is the body three'}
        // ]

        const posts = await Post.all();

        return view.render('posts.index', {
            title: 'Latest Posts',
            posts: posts.toJSON()
        })
    }

    async details({ params,view }) {
        const post = await Post.find(params.id)

        return view.render('posts.details', {
            post
        })
    }

    async add ({ view }) {
        return view.render('posts.add')
    }
}

module.exports = PostController
