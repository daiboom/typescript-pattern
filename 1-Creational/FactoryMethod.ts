class FullTime {
  hourly: string
  constructor() {
    this.hourly = '$12'
  }
}

class PartTime {
  hourly: string
  constructor() {
    this.hourly = '$11'
  }
}

class Temporary {
  hourly: string
  constructor() {
    this.hourly = '$10'
  }
}

class Contractor {
  hourly: string
  constructor() {
    this.hourly = '$15'
  }
}

class Factory {
  public createEmployee = function (type) {
    let employee

    if (type === 'fulltime') {
      employee = new FullTime()
    } else if (type === 'parttime') {
      employee = new PartTime()
    } else if (type === 'temporary') {
      employee = new Temporary()
    } else if (type === 'contractor') {
      employee = new Contractor()
    }

    employee.type = type

    employee.say = function () {
      console.log(this.type + ': rate ' + this.hourly + '/hour')
    }

    return employee
  }
}

const factoryEmployees = []
const factory = new Factory()

factoryEmployees.push(factory.createEmployee('fulltime'))
factoryEmployees.push(factory.createEmployee('parttime'))
factoryEmployees.push(factory.createEmployee('temporary'))
factoryEmployees.push(factory.createEmployee('contractor'))

for (let i = 0, len = factoryEmployees.length; i < len; i++) {
  factoryEmployees[i].say()
}
