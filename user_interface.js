(() => {
    const SVG_NAMESPACE = "http://www.w3.org/2000/svg";
    const $ = query => document.querySelector(query);
    const setStyle = (element, styles) => Object
        .keys(styles)
        .forEach(key => element.style[key] = styles[key]);
    const setAttribute = (element, attributes) => Object
        .keys(attributes)
        .forEach(key => element.setAttribute(key, attributes[key]));
    const createElement = (tagName, attributes, styles, isSvg) => {
        const element = isSvg
            ? document.createElementNS(SVG_NAMESPACE, tagName)
            : document.createElement(tagName);
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
        "position": "relative",
        "backgroundColor": "#F7F7F7",
        "z-index": 1,
    });
    const content = createElement("div", {}, {
        "padding": "8px 28px",
        "font-weight": 700,
        "flex-grow": 1,
        "min-height": 0,
        "position": "relative",
    });
    const guesses = createElement("div", { "id": "guesses" }, {
        "padding": "8px 8px",
        "font-weight": "normal",
        "font-family": "monospace",
        "overflow": "hidden",
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

    const reload = createElement("svg", {
        "id": "helper-reload",
        "width": 16,
        "height": 16,
        "fill": "#000",
        "viewBox": "0 0 16 16",
    }, {
        "position": "absolute",
        "right": "24px",
        "top": "11px",
        "cursor": "pointer",
    }, true);
    const reloadArrow = createElement("path", {
        "d": "M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z",
    }, {}, true);
    const reloadLine = createElement("path", {
        "d": "M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z",
        "fill-rule": "evenodd",
    }, {}, true);
    content.appendChild(reload);
    reload.appendChild(reloadArrow);
    reload.appendChild(reloadLine);
})();