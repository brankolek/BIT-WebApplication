import User from "../entities/users";


class UsersData {

    getData() {


        return fetch("https://randomuser.me/api/?results=150").then((response) => response.json()).then((data) => {




            return data.results.map((user) => {



                return new User(user.name.first, user.email, user.dob, user.picture.medium, user.picture.large, user.gender)



            })


        })

    }



}


export default new UsersData();