var yourPokemon = localStorage.getItem("yourPokemon");
var enemyPokemon = localStorage.getItem("enemyPokemon");

// Determine Pokémon names based on selected Pokémon
var yourPokemonName;
var enemyPokemonName;
if (yourPokemon === "venusaur") {
	yourPokemonName = "Venusaur";
	document.getElementById("player-sprite").src = "PokemonSprites/Venusaur.gif"
} else if (yourPokemon === "charizard") {
	yourPokemonName = "Charizard";
	document.getElementById("player-sprite").src = "PokemonSprites/Charizard.gif"
} else if (yourPokemon === "blastoise") {
	yourPokemonName = "Blastoise";
	document.getElementById("player-sprite").src = "PokemonSprites/Blastoise.gif"
} else if (yourPokemon === "gengar") {
	yourPokemonName = "Gengar";
	document.getElementById("player-sprite").src = "PokemonSprites/Gengar.gif"
} else if (yourPokemon === "golem") {
	yourPokemonName = "Golem";
	document.getElementById("player-sprite").src = "PokemonSprites/Golem.gif"
} else if (yourPokemon === "electivire") {
	yourPokemonName = "Electivire";
	document.getElementById("player-sprite").src = "PokemonSprites/Electivire.gif"
}

if (enemyPokemon === "venusaur") {
	enemyPokemonName = "Venusaur";
	document.getElementById("enemy-sprite").src = "PokemonSprites/Venusaur.gif"
} else if (enemyPokemon === "charizard") {
	enemyPokemonName = "Charizard";
	document.getElementById("enemy-sprite").src = "PokemonSprites/Charizard.gif"
} else if (enemyPokemon === "blastoise") {
	enemyPokemonName = "Blastoise";
	document.getElementById("enemy-sprite").src = "PokemonSprites/Blastoise.gif"
} else if (enemyPokemon === "gengar") {
	enemyPokemonName = "Gengar";
	document.getElementById("enemy-sprite").src = "PokemonSprites/Gengar.gif"
} else if (enemyPokemon === "golem") {
	enemyPokemonName = "Golem";
	document.getElementById("enemy-sprite").src = "PokemonSprites/Golem.gif"
} else if (enemyPokemon === "electivire") {
	enemyPokemonName = "Electivire";
	document.getElementById("enemy-sprite").src = "PokemonSprites/Electivire.gif"
}