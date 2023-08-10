class Mortgage {
  public name: string

  constructor(name) {
    this.name = name
  }

  public applyFor: (i: any) => any
}

Mortgage.prototype = {
  ...Mortgage.prototype,
  applyFor: function (amount) {
    // access multiple subsystems...
    let result = 'approved'
    if (!new Bank().verify(this.name, amount)) {
      result = 'denied'
    } else if (!new Credit().get(this.name)) {
      result = 'denied'
    } else if (!new Background().check(this.name)) {
      result = 'denied'
    }
    return this.name + ' has been ' + result + ' for a ' + amount + ' mortgage'
  },
}

class Bank {
  public verify = function (name, amount) {
    // complex logic ...
    return true
  }
}

class Credit {
  public get = function (name) {
    // complex logic ...
    return true
  }
}

class Background {
  public check = function (name) {
    // complex logic ...
    return true
  }
}

const mortgage = new Mortgage('Joan Templeton')
const result = mortgage.applyFor('$100,000')

console.log(result)
