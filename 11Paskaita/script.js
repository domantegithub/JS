console.log("11 paskaita - objektai");

// Tuščias objektas
const emptyObject = {};

const user = {
  name: "rokas19",
  password: "rokasrokas123", // -> sha256 -> asdkmas2312321asd@4123
  mail: "rokas@gmail.com",
  age: 23,
  gender: "male",
};

// console.log(user.name);
// console.log(user["name"]);

function getItem(key) {
  // user["gender"]
  return user[key];
}

// console.log(getItem("gender"));

const candle = {
  color: "green",
  taste: "apple",
  height: 8,
  radius: 8,
  turnLight: () => {
    console.log(
      `${candle.color} candle spreading tasteful ${candle.taste} smell`
    );
  },
  calculateLightTime: () => {
    const metric = candle.height * candle.radius;
    if (metric > 60) {
      return 180;
    } else if (metric > 30) {
      return 90;
    } else {
      return 45;
    }
  },
};

const minutes = candle.calculateLightTime();

const cat = {
  name: "Kleopatras",
  age: 15,
  color: "black",
  weight: 7,
  eat: (food) => {
    console.log(`${cat.name} is eating ${food}...`);
  },
  sleep: () => {
    console.log("Cat is sleeping...");
  },
  description: () => {
    console.log(`${cat.name} is a ${cat.color} cat and ${cat.age} age`);
  },
};

// console.log(`${cat.name} is a ${cat.color} cat and ${cat.age} age`);
// cat.eat("fish");

const codeClass = {
  type: "remote",
  subject: "Front-end + Node.js",
  lecturer: {
    name: "Rokas",
    surname: "Andreikenas",
    age: 23,
    experience: 3,
  },
  students: ["Edvinas", "Liudmila", "Rima", "Karolis"],
};

// console.log(codeClass.lecturer.name);
const lecturerFullName = `${codeClass.lecturer.name} ${codeClass.lecturer.surname}`;
// console.log(lecturerFullName);

// console.log(codeClass.students[0]);
const studentsCount = codeClass.students.length;
// console.log(studentsCount);

codeClass.type = "onsite";

const student = {};

// console.log(student.name);

student.name = "Rokas";
student.surname = "Andreikenas";

// console.log(student.name);

const names = ["Edvinas", "Liudmila", "Rima", "Karolis"];

names[0] = "Rokas";

const treeForm = document.getElementById("tree-form");

treeForm.addEventListener("submit", handleSubmitTreeForm);

function handleSubmitTreeForm(event) {
  event.preventDefault();

  const treeName = document.querySelector("input[name='tree-name']");
  const treeAge = document.querySelector("input[name='tree-age']");

  const name = treeName.value;
  const age = Number(treeAge.value);

  const tree = {
    name: name,
    age: age,
    isOld: age > 100 ? true : false,
    // isOld: age > 100,
  };

  console.log(tree);
}