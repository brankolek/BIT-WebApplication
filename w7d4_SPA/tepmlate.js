const render = (page) => {


    $("#main").empty();
    $('#main').append(page)


}

const navigate = (id) => {


    let page = $("#" + id).clone()

    render(page);
}

$(document).ready(() => {

    navigate("home")
});


const navigateTemplate = () => {

    const model = {
        title: "My page",
        body: "Lorem ipsum"
    }

    var page = renderViewForModel(model);
    render(page);
}

const renderViewForModel = (model) => {
    const template = `
    <div>
        <h1>${model.title}</h1>
        <p>${model.body}</p>
    </div>`;

    return $(template);
}