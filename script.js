const container = document.getElementsByClassName('container');
const btnContainer = document.querySelectorAll('.btn-container');
const quote = document.querySelector('#quote');


const getCategories = async () => {
    const url = 'https://api.chucknorris.io/jokes/categories';
    const resp = await fetch(url);
    const categories = await resp.json();
    return categories;
}


const renderCategories = async () => {
    const categories = await getCategories();
    categories.map(category => {
        const newBtn = document.createElement('button');
        newBtn.textContent = category;
        newBtn.value = category;
        newBtn.classList.add('btn');
        btnContainer[0].appendChild(newBtn);
        newBtn.addEventListener("click", getSpecificCategory)

    })
    container[0].appendChild(btnContainer[0]);

}


function getSpecificCategory() {
    renderJoke(this.value)
}

const getJoke = async (category) => {
    const url = `https://api.chucknorris.io/jokes/random?category=${category}`;
    const resp = await fetch(url);
    const joke = await resp.json();
    return joke;
}

const renderJoke = async (category) => {
    const joke = await getJoke(category);
    const newJoke = document.createElement('p');
    newJoke.textContent = joke.value;
    quote.textContent = newJoke.textContent;
}

renderCategories();