const character = {
    class: "Swamp Beast Diplomat",
    level: 5,
    health: 100
}

console.log("JS loaded");

document.querySelector('#charClass').textContent = character.class
document.querySelector('#charLevel').textContent = character.level
document.querySelector('#charHealth').textContent = character.health

document.querySelector('#attackBtn').addEventListener("click", function() {
    character.health -= 20;

    if (character.health <= 0){
        character.health = 0
        document.querySelector("#charHealth").textContent = character.health;
        setTimeout(function() {
            alert("Character dead");
        }, 250);
    }
    
    document.querySelector("#charHealth").textContent = character.health;
    
})

document.querySelector('#levelUpBtn').addEventListener("click", function() {
    character.level += 1;

    document.querySelector("#charLevel").textContent = character.level;
})