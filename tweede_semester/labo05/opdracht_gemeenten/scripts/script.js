const setup = () => {

    let gegevens = [];
    let input = prompt("Voer iets in:");

    while (input !== "stop") {
        gegevens.push(input);
        input = prompt("Voer nog iets in (of 'stop' om te stoppen):");
    }

    gegevens.sort();

    let label = document.getElementById("gemeenten");


}
window.addEventListener("load", setup);







