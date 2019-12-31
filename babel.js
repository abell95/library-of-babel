const validChars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
    'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u',
    'v', 'w', 'x', 'y', 'z', ',', '.', ' '];

const randomChar = () => {
    let charIndex = Math.floor(Math.random() * Math.floor(validChars.length));
    return validChars[charIndex];
}

const generateTitle = () => {
    console.log(document.title);
    let title = "";
    for (let i = 0; i < 10; i++) {
        title += randomChar();
    }
    document.title = title;
}

const generatePage = () => {
    // generate lines
    for (let i = 0; i < 40; i++) {
        let line = "";
        //generate letters
        for (let j = 0; j < 80; j++) {
            line += randomChar();
        }
        line += "</br>";
        document.querySelector("#text").innerHTML += line;
    }
}

window.onload = () => {
    generateTitle();
    generatePage();
}
