//14.1. JSON vs XML
//Создали парсер
const parser = new DOMParser();
// Записали в переменную что будем парсить
const xmlString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;
// Парсим xmlString, превращаем в DOM дерево, чтобы можго было вытаскивать из него элементы и работать с ними
const xmlDOM = parser.parseFromString(xmlString, "text/xml");
// Находим в дереве элемент student
const studentNode = xmlDOM.querySelectorAll("student");


// Создали пустой массив и объект, в которые добавим новые данные
const listArr = [];
const listObj = {
  list: listArr
};
// Переберем student как массив и найдем нужные нам элементы
studentNode.forEach(item => {
    const nameNode = item.querySelector("name");
    const firstNode = item.querySelector("first");
    const secondNode = item.querySelector("second");
    const firstSecondName = firstNode.textContent+' '+secondNode.textContent;// не знаю можно так делать или нет, но решил проверить, все работает.
    const ageNode = item.querySelector("age");
    const profNode = item.querySelector("prof");
    const langAttr = nameNode.getAttribute("lang");
  //пушим в наш пустой массив новые объекты
  listArr.push({
      name: firstSecondName,
      age: Number(ageNode.textContent),// Здесь еще нужно привести данные к типу Number
      prof: profNode.textContent,
      lang: langAttr
  })
});
//Ну и выводим в консоль объект, который содержит в себе пару ключ/значение, где значение представляет собой два объекта с данными
console.log(listObj);
//Комменты оставил для обратной связи, чтобы знать, правильно я вообще все это понял.


