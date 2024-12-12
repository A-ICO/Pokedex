const thumbnails = document.querySelectorAll('.thumbnail');


const largeImage = document.getElementById('largeimage');


const titleElement = document.querySelector('.pokemonimage h2');
const commentElement = document.querySelector('.pokemonimage p');


thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {

        largeImage.src = thumbnail.src;
        largeImage.alt = thumbnail.alt;
        largeImage.title = thumbnail.title;
        
        
        titleElement.textContent = thumbnail.title;
        commentElement.textContent = thumbnail.alt;
    });
});