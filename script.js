const joke = document.querySelector('p');
const btn = document.querySelector('button');

function handleClick() {
  fetch('https://api.chucknorris.io/jokes/random')
  .then(response => response.json())
  .then(json => {
    joke.innerText = json.value;
  })
}

handleClick();

btn.addEventListener('click', handleClick);
