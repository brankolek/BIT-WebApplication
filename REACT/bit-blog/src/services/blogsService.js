import {
    blogsUrl
} from "../shared/constant"
import Blog from "../entities/blog";
class BlogService {

    getBlogsFromAuthor() {


        fetch("https://jsonplaceholder.typicode.com/posts?userId=5").then((response) => {
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