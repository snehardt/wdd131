const builds = [
    {
        name: "Molten Armor",
        classType: "Melee",
        defense: "25",
        bonus: "+17% melee damage",
        recipe: "Hellstone Bars",
        image: "images/Molten.png",
        description: "Best melee armor before hardmode. High defense and strong damage bonus."
    },
    {
        name: "Jungle Armor",
        classType: "Mage",
        defense: "17",
        bonus: "+80 mana, -6% mana cost",
        recipe: "Jungle Spores, Vines, Stingers",
        image: "images/Jungle_armor.png",
        description: "Strong mage armor that boosts mana and reduces spell cost."
    },
    {
        name: "Necro Armor",
        classType: "Ranger",
        defense: "19",
        bonus: "+10% ranged crit chance",
        recipe: "Bones + Cobwebs",
        image: "images/ranger_weapon.png",
        description: "Best ranger armor in pre-hardmode with strong critical chance bonus."
    },
    {
        name: "Obsidian Armor",
        classType: "Summoner",
        defense: "15",
        bonus: "+15% summon damage, increased whip range/speed",
        recipe: "Obsidian + Silk + Tissue Samples/Shadow Scales",
        image: "images/summon_weapon.png",
        description: "Best summoner armor with strong whip and summon bonuses."
    },
    {
        name: "Meteor Armor",
        classType: "Mage",
        defense: "16",
        bonus: "Space Gun uses 0 mana",
        recipe: "Meteorite Bars",
        image: "images/mage_charge.png",
        description: "Great early mage armor with unlimited Space Gun usage."
    },
    {
        name: "Crimson Armor",
        classType: "Melee",
        defense: "19",
        bonus: "Increased life regen",
        recipe: "Crimtane Bars + Tissue Samples",
        image: "images/Molten.png",
        description: "Good survivability armor with health regeneration."
    },
    {
        name: "Shadow Armor",
        classType: "Melee",
        defense: "19",
        bonus: "+15% movement speed",
        recipe: "Demonite Bars + Shadow Scales",
        image: "images/Molten.png",
        description: "Fast melee armor that increases mobility."
    },
    {
        name: "Bee Armor",
        classType: "Summoner",
        defense: "13",
        bonus: "+2 minions, increased summon damage",
        recipe: "Bee Wax",
        image: "images/summoner_hardmode.png",
        description: "Early summoner armor that increases minion count."
    },
    {
        name: "Wood Armor",
        classType: "Any",
        defense: "3",
        bonus: "No set bonus",
        recipe: "Wood",
        image: "images/wood.png",
        description: "Very basic starter armor with minimal protection."
    },
    {
        name: "Cactus Armor",
        classType: "Any",
        defense: "4",
        bonus: "Damages enemies on contact",
        recipe: "Cactus",
        image: "images/cactus.png",
        description: "Early armor that slightly damages enemies when they hit you."
    },
    {
        name: "Gladiator Armor",
        classType: "Any",
        defense: "16",
        bonus: "Increased knockback",
        recipe: "Found in Underground Cabins",
        image: "images/gladiator.png",
        description: "Rare armor found in chests, useful early with good defense."
    },
    {
        name: "Ninja Armor",
        classType: "Any",
        defense: "10",
        bonus: "Increased movement speed and critical strike chance",
        recipe: "Dropped by King Slime",
        image: "images/ninja.png",
        description: "Light armor focused on speed and mobility."
    },
    {
        name: "Angler Armor",
        classType: "Any",
        defense: "7",
        bonus: "Increased fishing power",
        recipe: "Angler quest rewards",
        image: "images/angler.png",
        description: "Utility armor that improves fishing abilities."
    },
    {
        name: "Mining Armor",
        classType: "Any",
        defense: "3",
        bonus: "Increased mining speed",
        recipe: "Dropped by Undead Miners",
        image: "images/mining.png",
        description: "Specialized armor for faster resource gathering."
    },
    {
        name: "Copper Armor",
        classType: "Any",
        defense: "6",
        bonus: "Slightly increased defense",
        recipe: "Copper Bars",
        image: "images/copper.png",
        description: "Basic starter armor with low defense."
    },
    {
        name: "Tin Armor",
        classType: "Any",
        defense: "7",
        bonus: "Slightly increased defense",
        recipe: "Tin Bars",
        image: "images/tin.png",
        description: "Early game armor slightly better than copper."
    },
    {
        name: "Iron Armor",
        classType: "Any",
        defense: "9",
        bonus: "No set bonus",
        recipe: "Iron Bars",
        image: "images/iron.png",
        description: "Simple armor with solid early defense."
    },
    {
        name: "Lead Armor",
        classType: "Any",
        defense: "11",
        bonus: "No set bonus",
        recipe: "Lead Bars",
        image: "images/lead.png",
        description: "Stronger alternative to iron armor."
    },
    {
        name: "Silver Armor",
        classType: "Any",
        defense: "13",
        bonus: "No set bonus",
        recipe: "Silver Bars",
        image: "images/silver.png",
        description: "Mid-tier armor with decent protection."
    },
    {
        name: "Tungsten Armor",
        classType: "Any",
        defense: "15",
        bonus: "No set bonus",
        recipe: "Tungsten Bars",
        image: "images/tungsten.png",
        description: "Better version of silver armor with higher defense."
    },
    {
        name: "Gold Armor",
        classType: "Any",
        defense: "16",
        bonus: "No set bonus",
        recipe: "Gold Bars",
        image: "images/gold.png",
        description: "Strong early armor with high defense."
    },
    {
        name: "Platinum Armor",
        classType: "Any",
        defense: "20",
        bonus: "No set bonus",
        recipe: "Platinum Bars",
        image: "images/platinum.png",
        description: "Best ore-based armor before specialized builds."
    }
];

let buildContainer = document.querySelector('#results');
let searchBar = document.querySelector('#search-bar');

searchBar.addEventListener('input', searchBuild);

function searchBuild() {
    let query = searchBar.value.toLowerCase();

    let filtered = builds.filter(build => {
        return (
            build.name.toLowerCase().includes(query) ||
            build.classType.toLowerCase().includes(query) ||
            build.description.toLowerCase().includes(query)
        );
    });

    buildContainer.innerHTML = '';
    filtered.forEach(build => renderBuild(build));
}

function buildTemplate(build) {
    return `
    <div class="class">
        <img src="${build.image}" alt="${build.name}">
        <div>
            <h3>${build.name}</h3>
            <p><strong>Class:</strong> ${build.classType}</p>
            <p><strong>Defense:</strong> ${build.defense}</p>
            <p><strong>Bonus:</strong> ${build.bonus}</p>
            <p><strong>Recipe:</strong> ${build.recipe}</p>
            <p>${build.description}</p>
        </div>
    </div>
    `;
}

function renderBuild(build) {
    let html = buildTemplate(build);
    buildContainer.innerHTML += html;
}

function init() {
    let randNumber = Math.floor(Math.random() * builds.length);
    buildContainer.innerHTML = '';
    renderBuild(builds[randNumber]);
}

init();