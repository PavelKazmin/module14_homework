const btn = document.querySelector(".btn");
const photo = document.querySelector(".photo");



const useRequest = (widht, height) => {
    return fetch(`https://dummyimage.com/${widht}x${height}`)
        .then((response)=>{
        displayResult(response.url);
        return response;
        })
        .catch(() => { console.log('error') })
                
};



function displayResult(url) {
    let cards = '';
    cards = cards + `<img class="image" src="${url}" alt="image">`;
    photo.innerHTML=cards;
};



btn.addEventListener("click", async () => {
    const widht = document.querySelector('.input__w').value;
    const height = document.querySelector('.input__h').value;
    if (widht < 100 || widht > 300 || height < 100 || height > 300 || isNaN(widht) || isNaN(height)) {
        photo.innerHTML = "одно из чисел вне диапазона от 100 до 300";
    } else {
        const requestResult = await useRequest(widht, height);
    }
});