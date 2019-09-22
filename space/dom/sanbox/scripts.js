const articles = document.getElementByTagName('article');
const paragraphs = document.getElementsByTagName('p');
const firstArticle = articles[0];
const secondParagraph = paragraphs[1];

const whiteTextElements = document.getElementsByClassName('text-white');
const sidebar = document.getElementById('sidebar');

//Modify the DOM
 const mainHeading = document.getElementById('main-heading');
 mainHeading.textContent = 'Modify the DOM';

 const header = document.getElementById('page-header');
 header.innerHTML = '<h2>Modify the DOM</h2>';
header.classList.add('text-center');

sidebar.classList.remove('bg-info');
sidebar.classList.add('bg-primary');

header.style.padding = '1em';
header.classList.remove('bg-dark');
header.style.backgroundColor = '#B54135';

let newArticle = document.createElement('article');
let newHeading = document.createElement('h3');
let newParagraph = document.createElement('p');

newHeading.textContent = 'Article 004';
newParagraph.textContent = 'Have plan implementation of your task, before writing the code and send it to the tc, to approve it Plan is very important Team convention, respect it a lotReview your PR before anyone else';

newArticle.appendChild(newHeading);
newArticle.appendChild(newParagraph);

newArticle.classList.add('m-2', 'p-2', 'border', 'border-secondary');

newArticle.setAttribute('id', 'art-004');

const main = document.querySelector('main');
main.appendChild(newArticle);

const headers = document.querySelector('header');
const blueButton = document.getElementById('color-button-blue');
const brownButton = document.getElementById('color-button-brown');
const greenButton = document.getElementById('color-button-green');
const noneButton = document.getElementById('color-button-none');

const addPostButton = document.getElementById('add-post');
const removeButton = document.getElementById('remove-post');
const articleSection = document.querySelector('section');
// click event listener

blueButton.addEventListener('click', () => {
    header.classList.remove('brown-background', 'green-background');
    header.classList.add('blue-background', 'text-white');
});

brownButton.addEventListener('click', () => {
    header.classList.remove('blue-background', 'green-background');
    header.classList.add('brown-bakground', 'text-white');
})

greenButton.addEventListener('click', () => {
    header.classList.remove('brown-background','blue-background');
    header.classList.add('green-background', 'text-white');
})

noneButton.addEventListener('click', () => {
    header.classList.remove('blue-background', 'brown-bakcground', 'green-bakcground', 'text-white');
})

addPostButton.addEventListener('click', () => {
     const newPost = createNewPost();
     articleSection.appendChild(newPost);
})
removePostButton.addEventListener('click', () => {
    const articleCount = articleSection.childElementCount;
    if(articleCount > 1){
        articleSection.removeChild(articleSection.children[articleCount -1]);
    }
})
//Page functions
function createNewPost() {
    let newArticle = document.createElement('article');
    let newHeading = document.createElement('h5');
    let newParagraph = document.createElement('p');

    newHeading.textContent = 'another new blog post';
    newParagraph.textContent = ' Love from the air, Lorem ipsum dolor sit amet, sed sed. Massa vestibulum dui tellus nulla, leo vestibulum egestas, dolor ligula proin vivamus vestibulum morbi. Amet tincidunt pharetra condimentum vitae ante aliquam, minim augue purus, pretium quis mauris egestas. At ante. Gravida nec eu euismod ut. Orci sollicitudin, nulla dis mauris. Nullam ornare et vitae justo eu, quam pellentesque facilisi etiam dui eget.'

    newArticle.appendChild(newHeading);
    newArticle.appendChild(newParagraph);

    newArticle.classList.add('list-group-item');
}