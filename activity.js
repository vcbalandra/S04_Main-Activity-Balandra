


class Pokemon {
    constructor(name, type, hp, attack, defense, move) {
      this.name = name;
      this.type = type;
      this.hp = hp; 
      this.attack = attack;
      this.defense = defense;
      this.move = move;
    }
    
}

    function typeAdvantage(attackerType, defenderType) {
        let modifier;
    
        switch (attackerType) {
            case 'fire':
                switch (defenderType) {
                    case 'grass':
                    modifier = 2; 
                        break;
                    case 'water':
                        modifier = 0.5;
                        break;
                    case 'fire':
                        modifier = 1; 
                        break;
                    
                    default:
                        modifier = 1;  
                }
                break;
    
            case 'water':
                switch (defenderType) {
                    case 'fire':
                        modifier = 2;  
                        break;
                    case 'grass':
                        modifier = 0.5;  
                        break;
                    case 'water':
                        modifier = 1;  
                        break;
                    default:
                        modifier = 1;
                }
                break;

            case 'Grass':
                    switch (defenderType) {
                        case 'fire':
                            modifier = 0.5;  
                            break;
                        case 'grass':
                            modifier = 1;  
                            break;
                        case 'water':
                            modifier = 2;  
                            break;
                        default:
                            modifier = 1;
                    }
                    break;
    
            
            default:
                modifier = 1;  
        }
    
        return modifier;
    }
   
    function battle(pokemon1, pokemon2) {
       
        const randomChance = Math.random();  
    
        if (pokemon1.hp <= 0) {
            console.log(`${pokemon2.name} is the winner.`);
            return true; 
        } else if (pokemon2.hp <= 0) {
            console.log(`${pokemon1.name} is the winner.`);
            return true; 
        } else {
            const attacker = randomChance < 0.5 ? pokemon1 : pokemon2;  
            const defender = attacker === pokemon1 ? pokemon2 : pokemon1;
            
            move(attacker, defender);
            return false; 
        }
    }


    function move(attacker, defender, moveType) {
        let baseDamage = attacker.attack;

        switch (moveType) {
            case '1':
                baseDamage -= 5; 
                break;
            case '2':
                baseDamage -= 2; 
                break;
            case '3':
                break;
            default:
                console.log("Invalid move type selected.");
                return;
        }

        const damageModifier = typeAdvantage(attacker.type, defender.type);
    
        const critChance = 0.1;
    
        const isCrit = Math.random() < critChance;
    
        let finalDamage = baseDamage * damageModifier;
    
        if (isCrit) {
            const critMultiplier = 2; 
            finalDamage *= critMultiplier;
            alert(`${attacker.name} landed a critical hit!`);
        }

        finalDamage = Math.round(finalDamage);
    
        defender.hp -= finalDamage;

        let fullHp = Math.max(0, defender.hp + defender.defense);
    
        alert(`${attacker.name} attacked ${defender.name} for ${finalDamage} damage. ${defender.name} has ${fullHp} HP left.`);
        
        fullHp <= 0
        ? (alert(`${defender.name} has fainted.`))
        : alert(`${defender.name} has survived.`);
    }

const pokemon1 = new Pokemon('bulbasaur', 'grass', 200, 10, 40);
const pokemon2 = new Pokemon('charizard', 'fire', 200, 10, 40); 
const pokemon3 = new Pokemon('squirtle', 'water', 200, 10, 40);

let userPokemon;
let validChoice = false;

while (!validChoice) {
    let userPokemonChoice = prompt("Choose your Pokémon:\n1 for Bulbasaur (Grass)\n2 for Charizard (Fire)\n3 for Squirtle (Water)");

    if (userPokemonChoice === '1') {
        userPokemon = pokemon1;
        validChoice = true;
    } else if (userPokemonChoice === '2') {
        userPokemon = pokemon2;
        validChoice = true;
    } else if (userPokemonChoice === '3') {
        userPokemon = pokemon3;
        validChoice = true;
    } else {
        alert("Invalid choice. Please choose a valid option.");
    }
}

const allPokemons = [pokemon1, pokemon2, pokemon3];
let opponentPokemon = allPokemons.filter(pokemon => pokemon !== userPokemon)[Math.floor(Math.random() * 2)];

alert(`Your opponent is ${opponentPokemon.name}! Get ready for battle!`);


let gameOver = false;
while (!gameOver) {
    try {
        let moveChoice = prompt("Please select a move:\n 1 for Move 1 (low damage) \n 2 for Move 2 (medium damage) \n 3 for Move 3 (high damage)");

        if (moveChoice === '1' || moveChoice === '2' || moveChoice === '3') {
            move(userPokemon, opponentPokemon, moveChoice);

            if (opponentPokemon.hp + opponentPokemon.defense <= 0) {
                alert(`${userPokemon.name} is the winner! Game over.`);
                gameOver = true;
            }

            if (!gameOver) {
                move(opponentPokemon, userPokemon, moveChoice);

                if (userPokemon.hp + opponentPokemon.defense <= 0) {
                    alert(`${opponentPokemon.name} is the winner! Game over.`);
                    gameOver = true;
                }
            }
        } else {
            throw new Error("Invalid move choice. Please select 1, 2, or 3 only.");
        }
    } catch (error) {
        console.log(error.message);
        alert("Invalid move choice. Please select 1, 2, or 3 only.");
    }
}

    
