function ClassDecorator(constructor: Function) {
    console.log('Class decorator');
    console.log(constructor);
}

function ClassDecoratorFactory(logMessage: string) {
    return function(constructor: Function) {
        console.log('Class decorator (factory)');
        console.log(logMessage);
    }
}

@ClassDecorator
@ClassDecoratorFactory('Logging - Person')
class PersonDecoratorClass {
    name = 'Tom';

    constructor(){
        console.log('creating object');
    }
}

const pers = new PersonDecoratorClass();
console.log(pers);


function PropertyDecorator(target: any, propertyName: string | Symbol) {
    console.log('Property Decorator');
    console.log(target, propertyName);
}

function AccessorDecorator(target: any, name: string, descriptor: PropertyDescriptor) {
    console.log('accesor decorator');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

function MethodDecorator(target: any, name: string | Symbol, descriptor: PropertyDescriptor) {
    console.log('method decorator');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

function ParameterDecorator(target: any, name: string | Symbol, position: number) {
    console.log('parameter decorator');
    console.log(target);
    console.log(name);
    console.log(position);
}

class Product {
    @PropertyDecorator
    title: string;

    private _price: number

    constructor(t: string, p: number) {
        this.title = t
        this._price = p
    }

    @AccessorDecorator
    set price(val: number){
        if (val > 0) {
            this._price = val;
        }
    }

    @MethodDecorator
    getPriceWithTax(@ParameterDecorator tax: number){
        return this._price * (1+tax);
    }
}