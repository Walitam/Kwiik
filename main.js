// Imports

import Game from "./Game.json" assert {type:'json'};

// Basic variables

Game.kwiik = document.querySelector('#kwiik');
Game.kiwiCounter = document.querySelector('#counter');
Game.kiwis = 0;

// Manager functions

Game.init = function()
{
    if(!localStorage.kiwis) 
    {
        localStorage.kiwis = 0;
        console.log("prrouu");
    } else 
    {
        Game.kiwis = localStorage.kiwis;
        console.log(Game.kiwis);
    }
}

Game.gameLoop = function()
{
    this.kwiik.addEventListener("click", () => {
        console.log("ma queue ça te va ?")
    })
}

Game.init();
Game.gameLoop();

console.log(Game.buildings.human.name);

Game.buildings.array.forEach(element => {
});