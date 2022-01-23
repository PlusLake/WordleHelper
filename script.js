(() => {
    const $ = query => document.querySelector(query);
    const setStyle = (element, styles) => Object
        .keys(styles)
        .forEach(key => element.style[key] = styles[key]);
    const setAttribute = (element, attributes) => Object
        .keys(attributes)
        .forEach(key => element.setAttribute(key, attributes[key]));
    const createElement = (tagName, attributes, styles) => {
        const element = document.createElement(tagName);
        setAttribute(element, attributes);
        setStyle(element, styles);
        return element;
    };
    $("#helper")?.remove();
    const helper = createElement("div", { "id": "helper" }, {
        "backgroundColor": "#F7F7F7",
        "width": "300px",
        "height": "100%",
        "left": "0px",
        "bottom": "0px",
        "position": "fixed",
    });
    const title = createElement("div", {}, {
        "text-align": "center",
        "font-size": "24px",
        "font-weight": 700,
        "padding-top": "8px",
    });
    const line = createElement("div", {}, {
        "text-align": "center",
    });
    const lineInner = createElement("div", {}, {
        "border-top": "1px solid #DDD",
        "width": "250px",
        "display": "inline-block",
    });
    const content = createElement("div", {}, {
        "padding": "8px 32px",
    });
    content.innerText = "Possible guesses:";
    line.appendChild(lineInner);
    title.innerText = "Wordle Helper";
    helper.appendChild(title);
    helper.appendChild(line.cloneNode(true));
    helper.appendChild(content);
    helper.appendChild(line.cloneNode(true));
    $("body").appendChild(helper);
})();