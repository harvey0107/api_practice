const dog_result = document.getElementById('dog_result');
const dog_btn = document.getElementById('dog_btn');

dog_btn.addEventListener('click', handleDogBtn)

function handleDogBtn (){
    fetch('https://random.dog/woof.json')
    .then(res => res.json())
    .then(data => {
        dog_result.innerHTML = `<img src="${data.url}"/>`
    })
}