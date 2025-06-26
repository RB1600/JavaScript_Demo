//Weakmap
let wm = new WeakMap();
let user={
    name:"Rohit",
};
let user2={
    name:"Sita",
};
wm.set(user, "Private Data for Rohit");
wm.set(user2, "Private Data for Sita");
console.log(wm.get(user)); // "Private Data for Rohit"
console.log(wm.get(user2)); // "Private Data for Sita"  
console.log(wm.has(user));
