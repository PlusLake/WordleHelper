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
        "display": "flex",
        "flex-direction": "column",
    });
    const title = createElement("div", {}, {
        "font-size": "24px",
        "font-weight": 700,
        "padding-top": "8px",
        "text-align": "center",
    });
    const line = createElement("div", {}, {
        "text-align": "center",
    });
    const lineInner = createElement("div", {}, {
        "border-top": "1px solid #DDD",
        "width": "265px",
        "display": "inline-block",
    });
    const footer = createElement("div", {}, {
        "font-size": "12px",
        "padding-bottom": "8px",
    });
    const content = createElement("div", {}, {
        "padding": "8px 28px",
        "font-weight": 700,
        "flex-grow": 1,
        "min-height": 0,
    });
    const guesses = createElement("div", { "id": "guesses" }, {
        "padding": "8px 8px",
        "font-weight": "normal",
        "font-family": "monospace",
    });
    const github = createElement("a", { "href": "https://github.com/PlusLibrary/WordleHelper" }, {
        "text-decoration": "none",
        "color": "#777",
        "padding-left": "28px",
    });
    github.innerText = "GitHub"
    content.innerText = "Possible guesses:";
    content.appendChild(guesses);
    line.appendChild(lineInner);
    title.innerText = "Wordle Helper";
    helper.appendChild(title);
    helper.appendChild(line.cloneNode(true));
    helper.appendChild(content);
    footer.appendChild(line.cloneNode(true));
    footer.appendChild(github);
    helper.appendChild(footer);
    $("body").appendChild(helper);
})();
