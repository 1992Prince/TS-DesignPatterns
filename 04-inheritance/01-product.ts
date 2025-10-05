class Product{

    constructor(
        public id: string,
        public price: number,
        public description: string 
    ){}

    display(): void{
        console.log(
            `ID: ${this.id}, Price: ${this.price}, Desc: ${this.description}`
        )
    }
}


class Book extends Product{
    constructor(
        public id: string,
        public price: number,
        public description: string ,
        public title: string,
        public author: string
    ){
        super(id, price, description);
    }

    display(): void{
        super.display();
        console.log(`Author: ${this.author}, Title: ${this.title}`)
    }
}

class Electronic extends Product{
    constructor(
        public id: string,
        public price: number,
        public description: string ,
        public brand: string,
        public model: string
    ){
        super(id, price, description);
    }

    display(): void{
        super.display();
        console.log(`Brand: ${this.brand}, Model: ${this.model}`)
    }
}



let book = new Book("1", 19.99, "A good book", "John Doe", "Harry Potter Book series");
book.display();

console.log();

let laptop = new Electronic("2", 70000, "Laptop", "Dell", "5th Generation");
laptop.display();

/**
Output:

ID: 1, Price: 19.99, Desc: A good book
Author: Harry Potter Book series, Title: John Doe

ID: 2, Price: 70000, Desc: Laptop
Brand: Dell, Model: 5th Generation

 */