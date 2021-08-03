import { Car } from '../classes/car.js';
import { Drone } from '../classes/drone.js';
import { DataError } from './data-error.js';

// A class to provide data services to custom classes
export class FleetDataService {

    constructor() {
        this.cars = [];
        this.drones = [];
        this.errors = [];
    }

    loadData(fleet) {
        // For each instance of.. in fleet
        for (let data of fleet) {
            switch (data.type) {
                // Check the data type of object from flee-data adding to respective dataServices arrays 
                case 'car':
                    let car = this.loadCar(data)
                    this.cars.push(car);
                    break;
                case 'drone':
                    this.drones.push(data);
                    break;
                default:
                    // If none of the switch statement conditions are met, add errors to errors array from data services
                    let e = new DataError('Invalid vehcile type', data);
                    this.errors.push(e)
                    break;
            }
        }
    }

    loadCar(car) {
        try {
            // Using the data passed to the loadCar function to create new car object
            let c = new Car(car.license, car.model, car.latlong);
            c.miles = car.miles;
            c.make = car.make;
            // return car object
            return c;
        } catch (e) {
            // Create DataError and add message to dataservices error array
            this.errors.push(new DataError('error loading car', car));
        }
        return null;
    }

    loadCDrone(drone) {
        try {
            let d = new Drone(drone.license, drone.model, drone.latlong);
            d.airTimeHours = drone.airTimeHours;
            d.base = drone.base;
            return d;
        } catch (e) {
            this.errors.push(new DataError('error loading drones', drone));
        }
        return null;
    }
}