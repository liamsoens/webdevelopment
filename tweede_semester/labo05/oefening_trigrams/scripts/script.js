const setup = () => {

    const word = "onoorbaar";
    const trigrams = [];

    for (let i = 0; i < word.length - 2; i++) {
        trigrams.push(word.slice(i, i + 3));
    }

    console.log(trigrams);

}

window.addEventListener("load", setup);