(() => {
    const $ = query => document.querySelector(query);
    const repository = "https://raw.githubusercontent.com/PlusLibrary/WordleHelper/master";
    fetch(`${repository}/user_interface.js?timestamp=${Date.now()}`)
        .then(response => response.text())
        .then(script => {
            eval(script);
            return fetch(`${repository}/words.txt?timestamp=${Date.now()}`)
        })
        .then(response => response.text())
        .then(words => main(words.split("\n")));

    const getStatus = () => [...document.querySelector("game-app").shadowRoot.querySelector("#board").children]
        .map(row => row.shadowRoot.querySelectorAll("game-tile"))
        .map(row => [...row].map(value => ({ "letter": value._letter, "state": value._state })));

    const guess = (status, words) => {
        const flattened = status.flat();
        const exclude = [...new Set(flattened.filter(value => value.state == "absent").map(value => value.letter))];
        const include = [...new Set(flattened.filter(value => value.state == "present").map(value => value.letter))];
        const fixed = status
            .map(list => list.map(value => value.state == "correct" ? value.letter : null))
            .reduce((previous, current) => previous.map((letter, index) => letter ?? current[index]));
        const regexp = new RegExp(fixed.map(letter => letter ?? `[^${exclude.join("")}]`).join(""));
        console.log(include);
        return words
            .filter(word => word.match(regexp))
            .filter(word => include.every(letter => word.includes(letter)));
    };

    const main = (words) => {
        $("#helper-reload").addEventListener("click", event => {
            const current = getStatus();
            const result = guess(current, words);
            $("#guesses").innerHTML = result.join(" ");
        });
    };
})();
