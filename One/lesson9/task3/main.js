'use strict'

// Создать класс Car у которого будут описанные через this поля model, 
// engineVolume, horsePower(модель, объём двигателя, лошадиные силы).

class Car {
    constructor(model, engineVolume, horsePower) {
        this.model = model;
        this.engineVolume = engineVolume;
        this.horsePower = horsePower;

        // также создать переменную скорости this.speed и присвоить ей 0 и 
        // this.speedLimit = 140 для ограничения скорости.
        this.speed = 0;
        this.speedLimit = 140;
    }

    // Среди методов описать info(), move(), stop(), signal().
    // * info() выводит на экран 3 переданные характеристики автомобиля.
    info() {
        console.log(`
        Model: ${this.model} 
        EngineVolume: ${this.engineVolume} 
        HorsePower: ${this.horsePower}`);
    } 

    // * каждый вызов метода move() должен увеличивать текущую скорость данного 
    // экземпляра на 50, но не больше, чем лимит.Если мы превышаем лимит, 
    // то скорость равна лимиту.Выводить на экран текущую скорость
    move() {
        this.speed += 50;

        if (this.speed < this.speedLimit) {
            console.log(`Сurrent car speed ${this.speed}`);
        } else {
            console.log(`Sorry, but you car does not go faster ${this.speedLimit}`);
        }
    } 

    //  * stop() делает скорость равной нулю
    stop() {
        this.speed = 0;
        console.log(`Car stopped, your speed: ${this.speed}`);
    } 

    //  * signal() принимает аргументом звук сигнала и количество 
    //  * гудков и через цикл выполняет эти гудки.
    signal(sound, sum) {
        for (let i = 0; i < sum; i++) {
            console.log(sound);
        }
    }
}

// Унаследовать два класса: Truck и SportCar.Для Truck сделать this.speedLimit = 100 и добавить метод 
// carryCargo(перевозить груз), который будет говорить, что мы сейчас перевозим груз.

class Truck extends Car {
    constructor(...args) {
        super(...args);
        this.speedLimit = 100;
    }
    
    carryCargo() {
        console.log('We ship cargo');
    }
}

// для SportCar сделать this.speedLimit = 250

class SportCar extends Car {
    constructor(...args) {
        super(...args);
        this.speedLimit = 250;
    }
}

// создать экземпляры грузовика и спортивной машины и вызвать 
// столько раз метод move(), чтобы мы точно превысили лимит и 
// проверить работает ли ограничение.Повызывать остальные методы для проверки.
// ко всем методам добавить сообщение в консоль, что метод выполняется.

var myTruck = new Truck('Man', 4.2, 250);
var mySportCar = new SportCar('Ferarri', 5.0, 450);

myTruck.info();
myTruck.move();
myTruck.move();
myTruck.move();
myTruck.stop();
myTruck.signal();

mySportCar.info();
mySportCar.move();
mySportCar.move();
mySportCar.move();
mySportCar.move();
mySportCar.move();
mySportCar.move();
mySportCar.stop();
mySportCar.signal();