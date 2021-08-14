class Drone {
    // Properties
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    // Methods
    fly() {
        console.log('Done ' + this.id + ' is flying');
    }
    // static Methods
    static getCompany() {
        console.log('in getCompany');
    }
}
// Static Properties
Drone.maxHeight = 2000;

let drone = new Drone('A123', 'Flyer');
let drone2 = new Drone('B456', 'Twirl');


console.log(typeof drone);

console.log(drone instanceof Drone);

console.log('drone: '+ drone['id'] + ' ' + drone['name']);

console.log(Drone.maxHeight);
console.log(drone.maxHeight);

drone.fly();
drone2.fly();

Drone.getCompany();

