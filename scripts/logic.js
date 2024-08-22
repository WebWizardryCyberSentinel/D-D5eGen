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
    const races = ['Human', 'Half-Efl', 'Elf', 'Dwarf', 'Halfling', 'Dragonborn', 'Tiefling', 'Half-Orc'];
    const classes = ['Fighter', 'Wizard', 'Sorcerer', 'Barbarian', 'Druid', 'Rogue', 'Ranger', 'Monk', 'Paladin', 'Bard', 'Cleric', 'Warlock', 'Artificer']
    const abilities = ['Strength', 'Dexterity', 'Constitution', 'Intelligence', 'Wisdom', 'Charisma'];


    //Do some random stuff on race and class.
    const race = races[Math.floor(Math.random() * races.length)];
    const charClass = classes[Math.floor(Math.random() * classes.length)];
    // calculate abilities
    const abilityScores = abilities.map(ability => `${ability}: ${Math.floor(Math.random() * 16) + 3}`);


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
