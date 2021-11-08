// ! 🤝 PROMISES LAB SOLUTIONS 🤞 //

// ? Using the pokemon API (https://pokeapi.co/), display a pokemon's image on a page (note, there are lots of different images available here, and you can pick whichever you like). This should work for any pokemon, so in other words if you make a request for pikachu, your code should still work if you edit the string in your URL, to make a request for squirtle.

// const pokeName = prompt('Enter your pokemon')
// const imageDiv = document.querySelector('#pokemon')

// fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
//   .then(resp => resp.json())
//   .then(pokemon => {
//     const url = pokemon.sprites.other['official-artwork'].front_default
//     imageDiv.innerHTML = `<img src=${url} />`
//   })

// ? Using the Punk API beers endpoint https://api.punkapi.com/v2/beers, display the name and description of each beer on your page.
// ? Extend your beers list from question 2 to include cards with images, descriptions of food pairings, and any other information you'd like for each beer. Bonus: Add a way of filtering the beers your show, by their name, as you type.

const beersDiv = document.querySelector('#beers')

fetch('https://api.punkapi.com/v2/beers')
  .then(resp => resp.json())
  .then(beers => {
    console.log(beers)
    beersDiv.innerHTML = beers.map(beer => {
      return `<div class="beer">
        <img width=100 src=${beer.image_url} />
        ${beer.name} - ${beer.description}
      </div>`
    }).join('')
  })
