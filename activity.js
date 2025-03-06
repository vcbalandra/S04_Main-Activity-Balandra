


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


    function move(attacker, defender) {
        const damageModifier = typeAdvantage(attacker.type, defender.type);
    
        const baseDamage = attacker.attack;
        const critChance = 0.1;
    
        const isCrit = Math.random() < critChance;
    
        let finalDamage = baseDamage * damageModifier;
    
        if (isCrit) {
            const critMultiplier = 2; 
            finalDamage *= critMultiplier;
            console.log(`${attacker.name} landed a critical hit!`);
        }
    
        defender.hp -= finalDamage;
    
        console.log(`${attacker.name} attacked ${defender.name} for ${finalDamage} damage. ${defender.name} has ${defender.hp + defender.defense} HP left.`);
    
        if (defender.hp <= 0) {
            console.log(`${defender.name} has fainted.`);
            defender.hp = 0; 
            return; 
        } else {
            console.log(`${defender.name} has survived.`);
        }
    }
    const pokemon1 = new Pokemon('bulbasaur', 'grass', 200, 10, 40);
    const pokemon2 = new Pokemon('charizard', 'fire', 200, 10, 40);
    

    let gameOver = false;
    while (!gameOver) {
        let moves = prompt("Please select a move:\n 1 for Move 1 (low damage) \n 2 for Move 2 (medium damage) \n 3 for Move 3 (high damage)");
        
        let damageModifier;
        switch(moves) {
            case '1':
                damageModifier = 1;
                break;
            case '2':
                damageModifier = 2;
                break;
            case '3':
                damageModifier = 3;
                break;
            default:
                console.log("Invalid input. Please try again.");
                continue;  
        }
    
        gameOver = battle(pokemon1, pokemon2);
    }
