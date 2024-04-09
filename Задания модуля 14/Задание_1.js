//Этап 1. Подготовка данных

//экземпляр класса DOMparser
const parser = new DOMParser();
//сам XML, который будем парсить
const xmlString = 
`<list>
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
</list>`;

//Этап 2. Получение данных

//Парсинг XML
const xmlDOM = parser.parseFromString(xmlString, "text/xml");
// Получаем ноду student
const studentNode = xmlDOM.querySelectorAll("student");

//Создаем пустой массив
const listArr = [];
// Перебираем studentNode и записываем в пустой массив listArr новые данные
studentNode.forEach(item => {
  const nameNode = item.querySelector("name"); 
  const firstNode = item.querySelector("first"); 
  const secondNode = item.querySelector("second");
  const ageNode = item.querySelector("age");
  const profNode = item.querySelector("prof");
  const nameAttr = nameNode.getAttribute("lang");
  
  listArr.push({
      name: firstNode.textContent+' '+secondNode.textContent,
      age: Number(ageNode.textContent),
      prof: profNode.textContent,
      lang: nameAttr
  })
});
//Создаем объект и добавляем ключ list со значением в виде массива listArr
const list = {
    list: listArr
};
//Выводим в консоль 
console.log(list);


