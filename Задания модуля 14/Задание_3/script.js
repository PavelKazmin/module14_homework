const input = document.querySelector(".input");
const btn = document.querySelector(".btn");
const photo = document.querySelector(".photo");
/**
  * Функция-обертка над XMLHttpRequest, осуществляющая запрос
  * url - урл, по которому будет осуществляться запрос
  * callback - функция, которая вызовется при успешном выполнении
  * и первым параметром получит объект-результат запроса
  */
function useRequest(url, callback) {
    // Создаем экзепляр класса XMLHttpRequest
    const xhr = new XMLHttpRequest();
    // Инициализируем запрос
    xhr.open('GET', url, true);
    // Добавляем обрабочик ответа сервера            
    xhr.onload = function() {
        if (xhr.status != 200) {// HTTP ошибка?
            // Если статус не 200 (указывает, что запрос выполнен успешно),
            // то обрабатываем отдельно
            console.log('Статус ответа: ', xhr.status);
        } else {
            const result = JSON.parse(xhr.response);
            if (callback) {
                callback(result);
            }
        }
    };
    // Добавляем обрабочик ошибки            
    xhr.onerror = function() {
        console.log('Ошибка! Статус ответа: ', xhr.status);
    };
    // Отправляем запрос            
    xhr.send();
};
/**
* Функция обработки полученного результата
* apiData - объект с результатом запроса
*/
function displayResult(apiData) {
    let cards = "";

    apiData.forEach((item) => {
        const cardBlock = `
            <div class="card">
                <img src="${item.thumbnailUrl}" class="card-image"/>
            </div>`;
        cards += cardBlock;
    });

        photo.innerHTML = cards;
}
// Вешаем обработчик на кнопку для запроса
btn.addEventListener("click", function () {
    // Получение данных из input:
    const value = document.querySelector('input').value;
    const url = "https://jsonplaceholder.typicode.com/photos?_limit=" + value;

    if (value < 1 || value > 10) {
        alert("число вне диапазона от 1 до 10");
    } else {
        useRequest(url, displayResult);
    }
});   