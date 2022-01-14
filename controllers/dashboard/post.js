const moment = require('moment')
const { post } = require('../../router')
const posts = [
    {id:1, title:'Lorem Ipsum',body:'Dolor sit amet', createdAt:Date()},
    {id:2, title:'Lorem Ipsum', body:'Dolor sit amet', createAt: Date()}
]


module.exports = {
    index: (req,res) => {
        const locals = {
            data: {
                post:post.map(i => {
                    i.fromNow = moment(i.createdAt).fromNow()
                    return i
                }),
            },
            contentName: 'Post'
        }
        res.render('pages/dashboard/post', locals)
    }
}