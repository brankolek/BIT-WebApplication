import {
    loadData
} from "./data.js"

import {
    render
} from "./UI.js"



const init = () => {


    loadData().then((myJSON) => {

        render(myJSON)
    })
}


init();