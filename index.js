class Worker{
    constructor(name, surname, rate, days){
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
    }
    
    getSalery(){
        return this.rate*this.days;
        
    }
}

let worker = new Worker('Ivan', 'Pitul', 10, 60)
console.log(worker.getSalery())