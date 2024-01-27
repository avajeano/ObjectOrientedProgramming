//Part One
class Vehicle{
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }
    honk(){
        console.log("Beep");
    }
    toString(){
        console.log(`The vehicle is a ${this.make} ${this.model} from ${this.year}`);
    }
}

//Part Two
class Car extends Vehicle{
    constructor(make, model, year){
        super(make, model, year);
        this.numWheels = 4;
   }
}

//Part Three 
class Motorcycle extends Vehicle{
    constructor(make, model, year){
        super(make, model, year);
        this.numWheels = 2;
    }
    revEngine(){
        console.log("VROOM!!!")
    }
}

//Part Four
class Garage{
    constructor(capacity){
        this.vehicles = [];
        this.capacity = capacity; 
    }
    add(newVehicle){
        if(!(newVehicle instanceof Vehicle)) {
            return "Only vehicles are allowed here!";
        }
        if(!(this.vehicles.legth >= this.capacity)) {
            return "Sorry we're full.";
        }
        this.vehicles.push(newVehicle);
        return "Vehicle added"; 
    }
}