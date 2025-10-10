class Singleton {

    private static instance: Singleton;
    private static _value: number;

    private constructor(){}

    public static getInstance(): Singleton{
        if(!Singleton.instance){
            Singleton.instance = new Singleton();
        }

        return Singleton.instance;
    }

    // setter for _value
    set value(value:number){
        Singleton._value = value;
    }

    // getter for _value
    get value(){
        return Singleton._value;
    }
}


// now client/users can create obj of Singleton class via getInstance() method only
// getInstance() will only create object if instance/object is not created else it will return 
// ref of existing obj 

// creating first obj and here obj will be created since it is first time we are calling getInstance()
let instance1 = Singleton.getInstance();

// now Singleton obj is already created and calling again getInstance() wch will return
// already created object instance reference instead of creating new object
let instance2 = Singleton.getInstance();

// now we need to validate if instance1 and instance2 refs are pointing to same Singleton object in memory

console.log(instance1 === instance2); // true

// if we assign value to _value field of Singleton class from instance1 then same should
// be reflected to instance2 ref also
instance1.value = 101;
console.log(instance2.value); // 101

// so both instances i.e. instance1 and instance2 should have same values of value field