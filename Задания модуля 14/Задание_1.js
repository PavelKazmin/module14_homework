//14.1. JSON vs XML

const parser = new DOMParser();

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

const xmlDOM = parser.parseFromString(xmlString, "text/xml");

const studentNode = xmlDOM.querySelectorAll("student");



const listArr = [];
const listObj = {
  list: listArr
};

studentNode.forEach(item => {
    const nameNode = item.querySelector("name");
    const firstNode = item.querySelector("first");
    const secondNode = item.querySelector("second");
    const firstSecondName = firstNode.textContent+' '+secondNode.textContent;
    const ageNode = item.querySelector("age");
    const profNode = item.querySelector("prof");
    const langAttr = nameNode.getAttribute("lang");
  listArr.push({
      name: firstSecondName,
      age: Number(ageNode.textContent),
      prof: profNode.textContent,
      lang: langAttr
  })
});

console.log(listObj);


