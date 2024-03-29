document.getElementById("trainerForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Get the values from the form fields
    var yourTrainerName = document.getElementById("yourTrainerName").value;
    var enemyTrainerName = document.getElementById("enemyTrainerName").value;

    // Pass the values to JavaScript variables defined in another file
    localStorage.setItem("yourTrainerName", yourTrainerName);
    localStorage.setItem("enemyTrainerName", enemyTrainerName);

    // Redirect to another HTML page
    window.location.href = "selectPokemon.html";
});
