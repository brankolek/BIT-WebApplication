var loremIpsum = require('lorem-ipsum')


const blog = function () {


    return {

        id: Math.floor(Math.random() * 1000, ),

        title: loremIpsum({
            count: 3,
            units: 'words'
        }),

        intro: loremIpsum({
            count: 2,
            units: 'sentences'
        })


    }

}

const generateBlogs = function () {
    var blogs = [];

    for (var i = 0; i < 10; i++) {

        var oneBlog = blog();
        blogs.push(oneBlog)

    }

    return blogs;

}

module.exports = {
    generateBlogs
}