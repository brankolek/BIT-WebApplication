import React, {
    Component
} from 'react';
import blogsService from "../../services/blogsService"
import { Link, Redirect } from "react-router-dom"


class CreateBlogPage extends Component {
    constructor(props) {
        super(props);
        this.state = {

            title: "",
            text: "",
            status: false
        };



    }

    handleTitle = event => {
        this.setState({
            title: event.target.value
        })


    }
    handleText = event => {
        this.setState({
            text: event.target.value
        })


    }

    handleBlog = () => {

        let blog = {
            userId: 700,

            title: this.state.title,
            body: this.state.text
        }


        blogsService.postBlog(blog).then(response => response.json())
            .then(() => {
                this.setState({

                    status: true
                })

            }).catch((response) => {

                console.log(response)
            })

    }
    render() {
        return (

            this.state.status ? (<Redirect from='/posts/new' to='/' />) :

                < div className="container-fluid" >

                    <div className="row text-center justify-content-center my-5"><div className="col-6"><h1>NEW POST</h1></div></div>



                    <div className="row  text-center justify-content-center mb-5">
                        <div className=" col-6">
                            <form action="" method="post">
                                <h2>Title</h2>

                                <input onChange={this.handleTitle} type="text" />

                                <h2 className="my-3">Content</h2>

                                <textarea onChange={this.handleText} name="" id="" cols="30" rows="10"></textarea>

                                <br />

                                <button type="button" onClick={this.handleBlog} class="btn btn-primary mt-3 mr-5">Create</button>
                                <Link to="/"><button type="button" class="btn btn-secondary mt-3 ml-5">Cancel</button></Link>







                            </form>
                        </div>

                    </div>


                </div >
        );
    }
}

export default CreateBlogPage;