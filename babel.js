const validChars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
    'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u',
    'v', 'w', 'x', 'y', 'z', ',', '.', ' '];

String.prototype.hashCode = function () {
    var hash = 0, i, chr;
    if (this.length === 0) return hash;
    for (i = 0; i < this.length; i++) {
        chr = this.charCodeAt(i);
        hash = ((hash << 5) - hash) + chr;
        hash |= 0; // Convert to 32bit integer
    }
    return hash;
};

let next = Math.random() * 5;

const rand = () => {
  next = next * 1103515245 + 12345;
  let ret = ((next/65536) % (2 ** 31 - 1)) % validChars.length;
  next = next % 1103515249;
  return ret;
}

const srand = seed => {
  next = seed;
}

const randomChar = () => {
    let charIndex = Math.floor(rand());
    console.log(next);
    return validChars[charIndex];
}

const generateTitle = () => {
    console.log(document.title);
    let title = "";
    for (let i = 0; i < 10; i++) {
        title += randomChar();
    }
    document.title = title;
    document.querySelector("#title").innerHTML += title + "</br>"
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
    hexstring = window.prompt("Enter seed or do nothing");
    if (hexstring) {
        let seednum = hexstring.hashCode();
        if (seednum < 0) seednum = -seednum;
        srand(seednum);
    }
    generateTitle();
    generatePage();
}
