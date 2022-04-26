let url = "https://pokeapi.co/api/v2/pokemon/282/";

$(".select").click(function() {
    fetch(url)
        .then(function(response) {
            return response.json();
        })
        .then(function(pokeData) {
            console.log(pokeData);

            // Ex: Display the Pokemon's name
            $(".name").html(pokeData.name);
      

            // Display the Pokemon's weight
            $(".weight").html(pokeData.weight);

            // Display the Pokemon's height
            $(".height").html(pokeData.height);

            // Display the Pokemon's type
            $(".type").html(pokeData.types[0].type.name);

            // Display the Pokemon's image
            $(".pic").html(`<img class="pokeball" src="${pokeData.sprites.front_default}">`);

        });
});

