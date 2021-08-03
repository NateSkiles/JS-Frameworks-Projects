import { Vehicle } from './vehicle.js';

export class Drone extends Vehicle {

    // Call constructor and pass in properties as args
    constructor(license, model, latLong) {
        // Call superclass, vehicle
        super(license, model, latLong);
        this.airTimeHours = null;
        this.base = null;
    }
}