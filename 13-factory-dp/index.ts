abstract class NewCar {

    constructor(public model: string, public productionYear: number){}

    abstract displayCarInfo(): void;
}

class Sedan extends NewCar {

    displayCarInfo(): void {
        console.log(`This is a Sedan. Model: ${this.model}, Production Year: ${this.productionYear}`);
    }
}

class SUV extends NewCar {

    displayCarInfo(): void {
        console.log(`This is a SUV. Model: ${this.model}, Production Year: ${this.productionYear}`);
    }
}

class Hatchback extends NewCar {

    displayCarInfo(): void {
        console.log(`This is a Hatchback. Model: ${this.model}, Production Year: ${this.productionYear}`);
    }
}


class CarFactory{

    public createCar(type: 'sedan' | 'suv' | 'hatchback',
        model: string,
        productionYear: number
    ): NewCar{
        switch(type){
            case 'sedan':
                return new Sedan(model, productionYear);
            case 'suv':
                return new SUV(model, productionYear);
            case 'hatchback':
                return new Hatchback(model, productionYear);
            default:
                throw new Error("Invalid car type");
        }
    }
}

const carfactory = new CarFactory();

let hatchbackCar = carfactory.createCar('hatchback', "Toyota", 2020);
let sedanCar = carfactory.createCar('sedan', "Creta", 2021);
let suvCar = carfactory.createCar('suv', "ota", 2000);

hatchbackCar.displayCarInfo();
sedanCar.displayCarInfo();
suvCar.displayCarInfo();


/**
This is a Hatchback. Model: Toyota, Production Year: 2020
This is a Sedan. Model: Creta, Production Year: 2021
This is a SUV. Model: ota, Production Year: 2000
 */