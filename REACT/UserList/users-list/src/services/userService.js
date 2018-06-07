import User from "../entities/Users";
import {
    usersUrl
} from "../shared/constant"


class UsersService {

    getData() {


        return fetch(`${usersUrl}?results=50`).then((response) => response.json()).then((data) => {

            return data.results.map((user) => {

                return new User(user.name.first, user.email, user.dob, user.picture.medium, user.picture.large, user.gender)


            })

        })
    }

}


export default new UsersService();