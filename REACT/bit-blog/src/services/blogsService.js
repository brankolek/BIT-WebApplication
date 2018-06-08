import {
    blogsUrl
} from "../shared/constant"
import Blog from "../entities/blog";
class BlogService {

    postBlog(blog) {

        return fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(blog),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then(response => {

            if (response.ok) {
                return Promise.resolve(response)
            } else {

                return Promise.reject("Greska")
            }
        })




    }

    getBlogsFromAuthor(userId) {


        return fetch(`${blogsUrl}/posts?userId=${userId}`).then((response) => {
            return response.json()
        })

    }

    getBlogData(id) {

        return (


            fetch(`${blogsUrl}/posts/${id}`).then((response) => {
                return response.json()
            })
        )

    }

    getdata() {


        return (

            fetch(`${blogsUrl}/posts`).then((response) => {
                return response.json()
            }).then((data) => {

                return data.map((blog) => {

                    return new Blog(blog.userId, blog.id, blog.title, blog.body)

                })


            })
        )

    }
}

export default new BlogService();