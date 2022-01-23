# Worldle Helper

Wordle Helper is a tool to help you guess the answer of [Wordle](https://powerlanguage.co.uk/wordle/)!<br>
It won't directly find out the answer, but provide a list of possible answer.

## How to use

Execute the JavaScript below.

```javascript
fetch("https://raw.githubusercontent.com/PlusLibrary/WordleHelper/master/main.js")
    .then(response => response.text())
    .then(script => eval(script));
```

## About the dictionary

The word list (words.txt) is come from the original game's script.<br>
The URL below is an example. The hash (e65ce0a5) may change when the original game updates.

```
https://www.powerlanguage.co.uk/wordle/main.e65ce0a5.js
```


