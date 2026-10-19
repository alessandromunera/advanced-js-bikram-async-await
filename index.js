//DESARROLLA AQUI TUS SOLUCIONES

async function getImageAndName (pokemon){

    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    let data = await response.json();
    let name = data.name;
    let img = data.sprites.front_default;
    return {name, img}
    
}


const POKEMON_API = "https://pokeapi.co/api/v2/pokemon";
const DOG_API = "https://dog.ceo/api/breeds/image/random";
const RICK_API = "https://rickandmortyapi.com/api/character";

// EJERCICIO 1: 
async function getRandomPokemon() {
  const id = Math.floor(Math.random() * 151) + 1;

  const response = await fetch(`${POKEMON_API}/${id}`);
  const pokemon = await response.json();

  return pokemon;
}

// EJERCICIO 2: 
async function getImageAndName() {
  const pokemon = await getRandomPokemon();

  const img = pokemon.sprites.other["official-artwork"].front_default;
  const name = pokemon.name;

  return { img, name };
}

// EJERCICIO 3: 
async function printImageAndName() {
  const { img, name } = await getImageAndName();

  return `
<section>
    <img src="${img}" alt="${name}">
    <h1>${name}</h1>
</section>`;
}

// EJERCICIO 4: 
async function getRandomDogImage() {
  const response = await fetch(DOG_API);
  const data = await response.json();

  return data.message;
}

// EJERCICIO 5: 
async function getRandomPokemonImage() {
  const { img } = await getImageAndName();

  return img;
}

// EJERCICIO 6: 
async function printPugVsPikachu() {
  const dogImage = await getRandomDogImage();
  const pokemonResponse = await fetch(`${POKEMON_API}/pikachu`);
  const pikachu = await pokemonResponse.json();

  const pokemonImage =
    pikachu.sprites.other["official-artwork"].front_default;

  document.body.innerHTML += `
    <section>
      <h1>Pug vs Pikachu</h1>
      <div>
        <h2>Pug</h2>
        <img src="${dogImage}" alt="Pug">
      </div>
      <div>
        <h2>Pikachu</h2>
        <img src="${pokemonImage}" alt="Pikachu">
      </div>
    </section>`;
}

// EJERCICIO 7: 
async function getRandomCharacter() {
  const id = Math.floor(Math.random() * 826) + 1;

  const response = await fetch(`${RICK_API}/${id}`);
  const character = await response.json();

  return character;
}

// EJERCICIO 8: 
async function getRandomCharacterInfo() {
  const character = await getRandomCharacter();

  const img = character.image;
  const name = character.name;
  const episodes = character.episode;

  const firstEpisodeURL = episodes[0];
  const response = await fetch(firstEpisodeURL);
  const episodeData = await response.json();

  const firstEpisode = episodeData.name;
  const dateEpisode = episodeData.air_date;

  return {
    img,
    name,
    episodes,
    firstEpisode,
    dateEpisode
  };
}

// EJERCICIO 9: 
async function printRandomCharacterInfo() {
  const {
    img,
    name,
    episodes,
    firstEpisode,
    dateEpisode
  } = await getRandomCharacterInfo();

  const section = document.createElement("section");

  section.innerHTML = `
    <img src="${img}" alt="${name}">
    <h1>${name}</h1>
    <p>Episodios: ${episodes.length}</p>
    <p>Primer episodio: ${firstEpisode}</p>
    <p>Fecha de estreno: ${dateEpisode}</p>`;

  document.body.appendChild(section);
}
