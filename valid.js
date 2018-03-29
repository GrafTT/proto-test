class Validator{
    isMail(str){
        return str.match(/^[\w]{1}[\w-\.]*@[\w-]+\.[a-z]{2,4}$/gi) == str
    }
    
    isDomain(str){
        return str.match(/^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,6}$/g) == str
    }
    
    isDate(str){
        return str.match(/(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d/g) == str
    }
    
    isPhone(str){
        return str.match(/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/g) == str
    }
}

let valid = new Validator()

console.log(valid.isDate('31.11.2012'))
