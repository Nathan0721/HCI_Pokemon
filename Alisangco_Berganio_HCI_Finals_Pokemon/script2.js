document.getElementById("pokemonForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent default form submission behavior

  // Get the values from the form fields
  var yourTrainerName = document.getElementById("yourTrainerNamePlaceholder").textContent;
  var yourPokemon = document.getElementById("yourPokemon").value;
  var enemyTrainerName = document.getElementById("enemyTrainerNamePlaceholder").textContent;
  var enemyPokemon = document.getElementById("enemyPokemon").value;

  // Store the values in local storage
  localStorage.setItem("yourTrainerName", yourTrainerName);
  localStorage.setItem("yourPokemon", yourPokemon);
  localStorage.setItem("enemyTrainerName", enemyTrainerName);
  localStorage.setItem("enemyPokemon", enemyPokemon);

  // Redirect to the battle page
  window.location.href = "pokemonBattle.html";
});
