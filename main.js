
let Radha = 

{
  "name" : "Radha",
  "age" : 19,
  "isProgramming" : false,
  "hobbies" : ["swimming", "rangoli", "cycling"],
  "academics" : [{ 
    "ssc" : 90,
    "arts" : "A Grade",
    "good_subj" : ["maths", "c lang", "english"],
    "isGraduated" : false
    }]
}

//students_data is stored 
let students_data = 
`[
  {
    "name":"Hrdaya Sonawane",
    "age":18,
    "standard":"12th",
    "isAdult":true
  },
  {
    "name": "Sita Pawan",
    "age": 18,
    "standard": "12th",
    "isAdult": true
  },
  {
    "name": "Rama Gaikwad",
    "age": 16,
    "standard": "10th",
    "isAdult": false
  },
  {
    "name": "Krishna dharma",
    "age": 21,
    "standard": "first year",
    "isAdult": true
  },
  {
    "name": "Vrinda Sonawane",
    "age": 17,
    "standard": "11th",
    "isAdult": false
  }
  ]`

console.log(students_data);
console.log(JSON.parse(students_data));
console.log(JSON.parse(students_data)[0].name);
console.log(JSON.parse(students_data)[1].age);
