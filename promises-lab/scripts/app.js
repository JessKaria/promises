// ! 🤝 PROMISES LAB 🤞 //


// ! CRAFTIEST BEER
const displayBeers = document.querySelector('.beers')
console.log(displayBeers)

// fetch('https://api.punkapi.com/v2/beers')
//   .then(resp => resp.json())
//   .then(beer => {
//     displayBeers.innerHTML = beer.map(beer => {
//       console.log(displayBeers)
//       return `
//         <h1>${beer.name}</h1>
//         <h3>${beer.tagline}</h3>
//         <strong>${beer.first_brewed}</strong>
//         <p>${beer.description}</p><br>
//         <img src="${beer.image_url}" height="600"">
//         `
//     }).join('')
//   })

fetch('https://api.punkapi.com/v2/beers')
  .then(resp => resp.json())
  .then(beer => {
    displayBeers.innerHTML = beer.map(beer => {
      console.log(displayBeers)
      return `
        <h1>${beer.name}</h1>
        <h3>${beer.tagline}</h3>
        <strong>${beer.first_brewed}</strong>
        <p>${beer.description}</p><br>
        <img src="${beer.image_url}" height="600"">
        `
    }).join('')
  })






// const displayOffice = document.querySelector('.office')
// console.log(displayOffice)

// fetch('https://officeapi.dev/api/quotes')
//   .then(resp => resp.json())
//   .then(office => {
//     displayOffice.innerHTML = office.map(office => {
//       return `<li>
//         Name: ${office.name} -
//         Tagline: ${office.tagline}
//         First Brewed: ${office.first_brewed}
//       </li>`
//     }).join('')
//   })




