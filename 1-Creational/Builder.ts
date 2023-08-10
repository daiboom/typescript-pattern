class Shop {
  public construct = function (builder) {
    builder.step1()
    builder.step2()
    return builder.get()
  }
}

class CarBuilder {
  private car = null

  public step1 = function () {
    this.car = new Car()
  }

  public step2 = function () {
    this.car.addParts()
  }

  public get = function () {
    return this.car
  }
}

class TruckBuilder {
  private truck = null

  public step1 = function () {
    this.truck = new Truck()
  }

  public step2 = function () {
    this.truck.addParts()
  }

  public get = function () {
    return this.truck
  }
}

class Car {
  private doors = 0

  public addParts = function () {
    this.doors = 4
  }

  public say = function () {
    console.log('I am a ' + this.doors + '-door car')
  }
}

class Truck {
  private doors = 0

  public addParts = function () {
    this.doors = 2
  }

  public say = function () {
    console.log('I am a ' + this.doors + '-door truck')
  }
}

const shop = new Shop()
const carBuilder = new CarBuilder()
const truckBuilder = new TruckBuilder()
const car = shop.construct(carBuilder)
const truck = shop.construct(truckBuilder)

car.say()
truck.say()
