class Employee {
  private name: string
  constructor(name) {
    this.name = name
  }

  public say = function () {
    console.log('I am employee ' + this.name)
  }
}

class EmployeeFactory {
  public create = function (name) {
    return new Employee(name)
  }
}

class Vendor {
  private name: string
  constructor(name) {
    this.name = name
  }

  public say = function () {
    console.log('I am vendor ' + this.name)
  }
}

class VendorFactory {
  public create = function (name) {
    return new Vendor(name)
  }
}

const persons = []
const employeeFactory = new EmployeeFactory()
const vendorFactory = new VendorFactory()

persons.push(employeeFactory.create('Joan DiSilva'))
persons.push(employeeFactory.create("Tim O'Neill"))
persons.push(vendorFactory.create('Gerald Watson'))
persons.push(vendorFactory.create('Nicole McNight'))

for (let i = 0, len = persons.length; i < len; i++) {
  persons[i].say()
}
