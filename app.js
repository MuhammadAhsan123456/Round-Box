var initialRound = 0;

function roundBox(){
    var box = document.querySelector('.box');
    var hexColor = Math.random().toString(16).slice(2, 8).padEnd(6, 0)

    var round = initialRound += 10;
    box.style.rotate = `${round}deg`
    box.style.backgroundColor = `#${hexColor}`


}

// setInterval(roundBox, 200)