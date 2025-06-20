let carr = {
    name : "Maruti800",
    brand : "Tata",
    model : 2010,
    start : function(){
        console.log("Car start");
    }
}
console.log(carr)
carr.start();

let car = {
  color: 'red',
  brand: 'Toyota',
  model: 'Corolla',
  year: 2020,
  started: function() {
     console.log('Car started');   //In JavaScript, if a function doesn’t return something explicitly, it returns undefined by default.
  },
  stop() {
    console.log('Car stopped');
  }
  
};
console.log(`${car.brand}` ,car.started())
car.started();
