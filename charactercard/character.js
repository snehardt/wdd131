const character = {
    name: "Snortleblat",
    class: "Swamp Beast Diplomat",
    level: 5,
    health: 100,

    attacked: function() {
        this.health -= 20;

        if (this.health <= 0){
            this.health = 0;
            updateStats();

            setTimeout(function() {
            alert("Character dead");
            }, 500);

            return;
        }
        updateStats();
    },

    levelUp: function () {
        this.level += 1;
        updateStats();
    }
}

function updateStats() {
    document.querySelector('.name').textContent = character.name
    document.querySelector('#charClass').textContent = character.class
    document.querySelector('#charLevel').textContent = character.level
    document.querySelector('#charHealth').textContent = character.health
}

document.querySelector('#attackBtn').addEventListener("click", function() {
    character.attacked();
})

document.querySelector('#levelUpBtn').addEventListener("click", function() {
    character.levelUp();
})

updateStats();