class Vehicle {
    constructor(licenseNum) {
        this.licenseNum = licenseNum;
        this.gpsEnabled = true;
    }
    // Methods
    start() {
        console.log('starting Vehicle');
    }
    static getCompanyName() {
        console.log('My Company');
    }
}

class Drone extends Vehicle {

}

class Car extends Vehicle {
    constructor(licenseNum) {
        // Must call super first
        super(licenseNum);
        console.log('constructing Vehicle');
        this.gpsEnabled = false;
    }
    // Methods
    start() {
        // When calling a method from a super class, you must call the method from super.method()
        super.start();
        console.log('starting Car');
    }
    static getCompanyName() {
        // Must call static methods via the class object, not the instance of that class
        super.getCompanyName();
        console.log('My Other Company');
    }
}


let c = new Car();



// console.log(c instanceof Car);
// console.log(c instanceof Vehicle);
// console.log(c instanceof Object);

// console.log(c.licenseNum);

// console.log(c.gpsEnabled)

// c.start();

Car.getCompanyName();