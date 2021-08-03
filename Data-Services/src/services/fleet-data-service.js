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
                    if (this.validateCarData(data)) {
                        let car = this.loadCar(data)
                        // Make sure data is car before adding to array
                        if (car) {
                            this.cars.push(car);
                        }
                    }
                    else {
                        let e = new DataError('invalid car data', car);
                        this.errors.push(e);
                    }
                    break;
                case 'drone':
                    if (this.validateDroneData(data)) {
                        let drone = this.loadCDrone(data)
                        if (drone) {
                            this.drones.push(drone);
                        }
                    }
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
            return c;
        } catch (e) {
            // Create DataError and add message to dataservices error array
            this.errors.push(new DataError('error loading car', car));
        }
        return null;
    }

    validateCarData(car) {
        let requiredProps = 'license model latLong miles make'.split(' ');
        let hasErrors = false;
        // Error checking
        for (let field of requiredProps) {
            if (!car[field]) {
                this.errors.push(new DataError(`invald field ${field}`, car));
                hasErrors = true;
            }
        }
        if (Number.isNaN(Number.parseFloat(car.miles))) {
            this.errors.push(new DataError('invalid mileage', car));
            hasErrors = true;
        }
        return !hasErrors;
    }

    getCarByLicense(license) {
        return this.cars.find(function (car) {
            return car.license === license;
        })
    }

    getCarsSortedByLicense() {
        return this.cars.sort(function (car1, car2) {
            if (car1.license < car2.license)
                return -1;
            if (car1.license > car2.license)
                return 1;
            return 0;

        });
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

    validateDroneData(drone) {
        let requiredProps = 'license model latLong airTimeHours base'.split(' ');
        let hasErrors = false;
        // Error checking
        for (let field of requiredProps) {
            if (!drone[field]) {
                this.errors.push(new DataError(`invald field ${field}`, drone));
                hasErrors = true;
            }
        }
        if (Number.isNaN(Number.parseFloat(drone.airTimeHours))) {
            this.errors.push(new DataError('invalid airTimeHours', drone));
            hasErrors = true;
        }
        return !hasErrors;
    }

    getDroneByLicense(license) {
        return this.drones.find(function (drone) {
            return drone.license === license;
        })
    }

    getDronesSortedByLicense() {
        return this.drones.sort(function (drone1, drone2) {
            if (drone1.license < drone2.license)
                return -1;
            if (drone1.license > drone2.license)
                return 1;
            return 0;

        });
    }

}