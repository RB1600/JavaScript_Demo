//Map 
let score = new Map();
score.set("rohit", 100);
score.set("sita", 200);
score.set("ram", 300);
score.set("gita", 400);
console.log(score);
console.log(score.get("rohit"));
console.log(score.has("ram"));
console.log(score.size);
console.log(score.keys());
console.log(score.values());
console.log(score.entries());
//Iterating through Map
for (let [key, value] of score) {
    console.log(`${key} : ${value}`);
}
