class ToyotaCar{
    start(){
        return "Toyota car started";    
    }
    stop(){
        return "Toyota car stopped";
    }
    setBrand(brand , model){
        this.brand = brand;
        this.model = model;
    }
}
let fortuner = new ToyotaCar();  // Create an instance of ToyotaCar
let lexus = new ToyotaCar();  // Create another instance of ToyotaCar
fortuner.setBrand("Fortuner" , "2023"); // Set brand and model for fortuner
console.log(fortuner.start());  // Call start method on fortuner
console.log(lexus.start()); // Call start method on lexus
console.log(fortuner.stop()); // Call stop method on fortuner
console.log(fortuner ); // Display fortuner object

lexus.setBrand("Lexus" , "2023"); // Set brand and model for lexus
console.log(lexus ); // Display updated lexus object
