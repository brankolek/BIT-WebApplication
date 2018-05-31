$(function(){
    navigate("home");
});

const render = (page) => {
    var container = $("#app");
    container.children().remove();
    container.append(page);
} 

const navigate = (page) => {
    var page = $("#" + page).clone();
    render(page);
};

const navigateToTemplate = () => {
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