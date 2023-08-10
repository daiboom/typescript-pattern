class Person {
  public name
  private street
  private city
  private state
  constructor(name, street, city, state) {
    this.name = name
    this.street = street
    this.city = city
    this.state = state
  }
  hydrate = function () {
    const memento = JSON.stringify(this)
    return memento
  }

  dehydrate = function (memento) {
    const m = JSON.parse(memento)
    this.name = m.name
    this.street = m.street
    this.city = m.city
    this.state = m.state
  }
}

class CareTaker {
  mementos = {}
  add
  get;

  constructor() {
    this.add = function (key, memento) {
      this.mementos[key] = memento
    }

    this.get = function (key) {
      return this.mementos[key]
    }
  }
}

const mike = new Person('Mike Foley', '1112 Main', 'Dallas', 'TX')
const john = new Person('John Wang', '48th Street', 'San Jose', 'CA')
const caretaker = new CareTaker()

// save state
caretaker.add(1, mike.hydrate())
caretaker.add(2, john.hydrate())

// mess up their names
mike.name = 'King Kong'
john.name = 'Superman'

// restore original state
mike.dehydrate(caretaker.get(1))
john.dehydrate(caretaker.get(2))

console.log(mike.name)
console.log(john.name)
