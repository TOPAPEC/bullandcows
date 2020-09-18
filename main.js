// Create a different greeting element depending on the time of day
let greeting
if (new Date().getHours() < 12) {
  const style = { color: 'green' }
  greeting = React.createElement('h1', { style }, "Good morning!")
}
else {
  const style = { color: 'red' }
  greeting = React.createElement('h1', { style }, "Good afternoon!")
}

// Create an element, but only if it is the weekend
const dayOfWeek = new Date().getDay()
let weekend = null
if (dayOfWeek === 0 || dayOfWeek === 6) {
  weekend = React.createElement('strong', {}, "Hooray! It's the weekend!")
}

// ReactDOM.render() expects a single element, so if you want to render
// multiple elements, wrap them in an empty `div`
const root = React.createElement('div', {},
  greeting,

  // If a child is `null`, `false` or `undefined`, React is smart enough
  // to not render anything
  weekend
)

ReactDOM.render(
  root,
  document.getElementById('app')
)
