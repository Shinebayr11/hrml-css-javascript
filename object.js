// let me = {
//   firstName: "Shinee",
//   lastName: "Boldbaatar",
//   age: "23",
//   hobby: ["voll , tennis...."],
// };
// console.log(me.firstName);
// console.log(me.hobby);

// const todos = [
//   {
//     taskname: "hicheelee hiih",
//     isCompeleted: false,
//   },
//   {
//     taskname: "hooloo ideh",
//     isCompeleted: true,
//   },
//   {
//     taskname: "untah",
//     isCompeleted: true,
//   },
// ];
// let box = document.getElementById("box");
// for (let i = 0; i < todos.length; i++) {
//   let todo = todos[i];
//   let todoHtml = `<div class="todox">
//   <input type = "checkbox"/>
//   <div>${todo.taskname}</div>
//   </div>
//    `;
//   box.innerHTML += todoHtml;
// }
const person = [
  {
    ner: "Bat",
    age: "21",
    huis: "er",
    phone: "1234",
  },
  {
    ner: "Bold",
    age: "20",
    huis: "er",
    phone: "4564",
  },
  {
    ner: "Anu",
    age: "22",
    huis: "em",
    phone: "2341",
  },
  {
    ner: "Zul",
    age: "21",
    huis: "em",
    phone: "6847",
  },
  {
    ner: "Suh",
    age: "19",
    huis: "er",
    phone: "0986",
  },
];

for (let i = 0; i < person.length; i++) {
  if (person[i].huis === "er") {
    console.log(person[i]);
  }
}
