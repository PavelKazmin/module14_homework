//14.1. JSON vs XML
// Записываем JSON объект в переменную, чтобы работать с ним
const jsonString = `{
  "list": [
   {
    "name": "Petr",
    "age": "20",
    "prof": "mechanic"
   },
   {
    "name": "Vova",
    "age": "60",
    "prof": "pilot"
   }
  ]
 }`;
// парсим этот JSON
 const data = JSON.parse(jsonString);
//Выводим в консоль получившийся объект
console.log(data);