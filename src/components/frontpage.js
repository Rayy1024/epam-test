import { renderChart } from "./chart.js";
import { getReadings, groupByDay, sortByTime } from "./reading";

//Epam test code
function Person(name, age) {
  const person = {};
  person.name = name;
  person.age = age;
  return person;
}

var Person1 = new Person("Tester", 10);
console.log("Name:" + Person1.name);
console.log("Age:" + Person1.age);

var Person2 = Person("Tester", 10);

console.log("Name:" + Person2.name);
console.log("Age:" + Person2.age);

async function main() {
  const readings = await getReadings();
  renderChart(sortByTime(groupByDay(readings)).slice(-30));
}
main();
