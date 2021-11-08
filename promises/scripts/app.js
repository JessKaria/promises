// * 🤝 PROMISES 🤞 * //

const displayDonut = document.querySelector('#donut')

// ? fetch is a built in function, for fetching information from servers.
// ! This line of code is asynchronous
const donutPromise = fetch('https://ga-doughnuts.herokuapp.com/doughnuts/1')
// console.log(donutPromise)
// console.log(typeof donutPromise)

donutPromise
  // ? the .then method takes a callback as its argument,
  // ? which runs when the promise is fulfilled.
  // ! always include this line with fetch
  // ? gives you back resp as an object
  // ? you then call .json on it, to give you another promise.
  .then((resp) => resp.json())
  .then((data) => {
    // ! You don't have until you're in here
    console.log(data)
    displayDonut.innerHTML = `<div>
      Style: ${data.style} -
      Flavour: ${data.flavour}
    </div>`
  })


// ! Donut list example
const displayDonuts = document.querySelector('#donuts')

fetch('https://ga-doughnuts.herokuapp.com/doughnuts')
  // ! always include this when using fetch
  .then(resp => resp.json())
  // ! In here we have the actual data
  .then(donuts => {
    console.log(donuts)
    // ? Could do it this way...
    // donuts.forEach(donut => {
    //   // ? Create a new item
    //   const li = document.createElement('li')
    //   // ? Set the text inside
    //   li.innerHTML = `
    //     Style: ${donut.style} -
    //     Flavour: ${donut.flavour}
    //   `
    //   // ? Stick it in the page
    //   displayDonuts.appendChild(li)
    // })
    // ? but alternatively 🤞🏼...
    displayDonuts.innerHTML = donuts.map(donut => {
      return `<li>
        Style: ${donut.style} -
        Flavour: ${donut.flavour}
      </li>`
    }).join('')
  })


// ! Example with render function and global variables
// ? This example can be really useful for when I want to separate
// ? out fetching from rendering
let donuts = [{ style: 'nicks donut', 'flavour': 'sweet' }]
// ? notice I can render nicks donut before fetching. I can call this
// ? whenever I need to.

fetch('https://ga-doughnuts.herokuapp.com/doughnuts')
  // ! always include this when using fetch
  .then(resp => resp.json())
  // ! In here we have the actual data
  .then(data => {
    donuts = data
    render()
  })

// ? Render what's currently in donuts onto the page
function render() {
  displayDonuts.innerHTML = donuts.map(donut => {
    return `<li>
      Style: ${donut.style} -
      Flavour: ${donut.flavour}
    </li>`
  }).join('')
}
