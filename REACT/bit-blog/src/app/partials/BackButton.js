import React, { Component } from 'react';


class BackButton extends Component {

    static contextTypes = {
        router: () => true
    }

    render() {
        return (


            < i class="fas fa-backward" onClick={this.context.router.history.goBack}> </i>

        )
    }
}

export default BackButton;