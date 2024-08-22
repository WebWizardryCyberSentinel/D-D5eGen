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

function generateCharacter(){
    const races = ['Human', 'Elf', 'Dwarf', 'Halfling', 'Dragonborn'];
    const classes = ['Fighter', 'Wizard', 'Sorcerer', 'Barbarian', 'Druid', 'Rogue']
    const abilities = ['Strength', 'Dexterity', 'Constitution', 'Intelligence', 'Wisdom', 'Charisma'];

    const race = races[Math.floor(Math.random() * races.length)];
    const charClass = classes[Math.floow(Math.random() * classes.length)];
    const abilityScores = abilities.map(ability => `${ability}: ${Math.Floow(Math.random() * 16) + 3}`);



    const character = `
        <h2>${race} ${charClass}<h2>
        <ul>
            ${abilityScores.map(score => `<li>${score}</li>`).join('')}
        </ul>
    `;


    document.getElementById('character').innerHTML = character;
}
