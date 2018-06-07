import {
    blogsUrl
} from "../shared/constant"
import Author from "../entities/author";
class AuthorsService {

    getdata() {


        return (

            fetch(`${blogsUrl}/users`).then((response) => {
                return response.json()
            }).then((data) => {

                return data.map((author) => {

                    return new Author(author.id, author.name, author.username, author.email, author.phone, author.address.street, author.address.city, author.address.zipcode, author.company.name, author.company.catchPhrase)

                })


            })
        )

    }
}

export default new AuthorsService();