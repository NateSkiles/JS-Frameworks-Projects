class Drone {
    constructor(id) {
        // Private Properties
        this._id;
    }

    get id() {
        console.log('in id getter');
        return this._id + ' TEMPORARY';
    }

    set id(value) {
        this._id = value;
    }
}

let drone = new Drone('A123');
drone.id = 'B456';
console.log('drone id: ' + drone._id);