class Flyweight {
  private make: string
  private model: string
  private processor: string

  constructor(make: string, model: string, processor: string) {
    this.make = make
    this.model = model
    this.processor = processor
  }
}

const FlyWeightFactory = (function () {
  let flyweights = {}

  return {
    get: function (make: string, model: string, processor: string) {
      if (!flyweights[make + model]) {
        flyweights[make + model] = new Flyweight(make, model, processor)
      }

      return flyweights[make + model]
    },

    getCount: function () {
      let count = 0
      for (let f in flyweights) count++
      return count
    },
  }
})()

class Computer {
  private flyweight: string
  private memory: string
  private tag: string

  constructor(
    make: string,
    model: string,
    processor: string,
    memory: string,
    tag: string
  ) {
    this.flyweight = FlyWeightFactory.get(make, model, processor)
    this.memory = memory
    this.tag = tag
  }

  getMake = function () {
    return this.flyweight.make
  }
}

class ComputerCollection {
  private computers = {}
  private count = 0

  public add = function (make, model, processor, memory, tag) {
    computers[tag] = new Computer(make, model, processor, memory, tag)
    this.count++
  }

  public get = function (tag) {
    return computers[tag]
  }

  public getCount = function () {
    return this.count
  }
}

const computers = new ComputerCollection()

computers.add('Dell', 'Studio XPS', 'Intel', '5G', 'Y755P')
computers.add('Dell', 'Studio XPS', 'Intel', '6G', 'X997T')
computers.add('Dell', 'Studio XPS', 'Intel', '2G', 'U8U80')
computers.add('Dell', 'Studio XPS', 'Intel', '2G', 'NT777')
computers.add('Dell', 'Studio XPS', 'Intel', '2G', '0J88A')
computers.add('HP', 'Envy', 'Intel', '4G', 'CNU883701')
computers.add('HP', 'Envy', 'Intel', '2G', 'TXU003283')

console.log('Computers: ' + computers.getCount())
console.log('Flyweights: ' + FlyWeightFactory.getCount())
