import {
    blogsUrl
} from "../shared/constant"
import Blog from "../entities/blog";
class BlogService {

    getdata() {


        return (

            fetch(`${blogsUrl}/posts`).then((response) => {
                return response.json()
            }).then((data) => {

                return data.map((blog) => {

                    return new Blog(blog.userId, blog.title, blog.body)

                })


            })
        )

    }
}

export default new BlogService();