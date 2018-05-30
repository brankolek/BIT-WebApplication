export const render = (myJSON) => {


    myJSON.forEach(element => {

        let div = $("<div>");
        let h3 = $("<h3>").text(element.title);
        let p = $("<p>").text(element.intro);
        div.addClass("blog")
        div.append(h3);
        div.append(p);
        $("#main").append(div);
    });

}