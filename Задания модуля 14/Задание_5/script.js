const btn = document.querySelector(".btn");
const photo = document.querySelector(".photo");


function displayResult(apiData) {
    let cards = "";

    apiData.forEach((item) => {
    const cardBlock = `
        <div class="card">
            <img class="card-image" src="${item.thumbnailUrl}">
            <p class="text">${item.title}</p>
        </div>
    `;
    cards += cardBlock;
    });

    photo.innerHTML = cards;
}


const images = localStorage.getItem('cards');
if(images) {
   
displayResult(JSON.parse(images));
}



btn.addEventListener("click", async () => {
    const valuePageNumber = document.querySelector('.input__page-number').value;
    const valueLimit = document.querySelector('.input__limit').value;
    let page = valuePageNumber >= 1 && valuePageNumber <= 10;
    let limit = valueLimit >= 1 && valueLimit <= 10;
    
    if (page && limit) {
        fetch(`https://jsonplaceholder.typicode.com/photos?_page=${valuePageNumber}&_limit=${valueLimit}`)
            .then((response) => {
                console.log('response', response);
                return response.json();
            })
            .then((data) => {
                displayResult(data);
                localStorage.setItem('cards', JSON.stringify(data));
                }) 
            .catch(() => { console.log('error') })
            
    } else if (page && !limit) {
        photo.innerHTML = "Лимит вне диапазона от 1 до 10";
    } else if (!page && limit) {
        photo.innerHTML = "Номер страницы вне диапазона от 1 до 10";
    } else {
        photo.innerHTML = "Номер страницы и лимит вне диапазона от 1 до 10";
    }
});