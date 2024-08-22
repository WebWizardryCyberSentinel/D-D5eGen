/*
#
# -> Logic for D&D 5e generator
# -> currnetly races, classes and abilities are hardcoded. move these to a database.
#
#
#
*/


// Add an event listener that listens for the click event and uses function generateCharacter.
document.getElementById('generateButton').addEventListener('click', generateCharacter);

// functions to generate the character
function generateCharacter(){
    const races = ['Human', 'Elf', 'Dwarf', 'Halfling', 'Dragonborn'];
    const classes = ['Fighter', 'Wizard', 'Sorcerer', 'Barbarian', 'Druid', 'Rogue']
    const abilities = ['Strength', 'Dexterity', 'Constitution', 'Intelligence', 'Wisdom', 'Charisma'];

    const race = races[Math.floor(Math.random() * races.length)];
    const charClass = classes[Math.floor(Math.random() * classes.length)];
    const abilityScores = abilities.map(ability => `${ability}: ${Math.Floor(Math.random() * 16) + 3}`);


    //DOM for the character
    const character = `
        <h2>${race} ${charClass}<h2>
        <ul>
            ${abilityScores.map(score => `<li>${score}</li>`).join('')}
        </ul>
    `;

    // inject character in DOM
    document.getElementById('character').innerHTML = character;
}
