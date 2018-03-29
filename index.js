//class Worker{
//    constructor(name, surname, rate, days){
//        this._name = name;
//        this._surname = surname;
//        this._rate = rate;
//        this._days = days;
//    }
//    
//    getSalery(){
//        return this._rate*this._days;
//        
//    }
//    
//    getName(){
//        return this._name;
//        
//    }
//    
//    getSurname(){
//        return this._surname;
//        
//    }
//    
//    getRate(){
//        return this._rate;
//        
//    }
//    
//    getDays(){
//        return this._days;
//        
//    }
//    
//    setRate(newRate){
//        return this._rate=newRate;
//        
//    }
//    
//    setDays(newDays){
//        return this._days=newDays;
//        
//    }
//}
//
//let worker = new Worker('Ivan', 'Pitul', 10, 60)
//worker.setDays(50)
//console.log(worker.getSalery())


class MyString{
    reverse(str){
//        return str.split(' ').reverse().forEach(x=>{
//            return x.split('').reverse().join()
//        }).join(' ')
        return str.split(' ').reverse().map(x=>x.split('').reverse().join('')).join(' ')
    }
    
    ucFirst(str){
        return str.charAt(0).toUpperCase() + str.slice(1)
    }
    
    ucWord(str){
        return str.split(' ')
            .map(x=> x.charAt(0).toUpperCase()+ x.slice(1))
            .join(' ')
    }
}

let string = new MyString()

console.log(string.ucWord('de gh ki'))








