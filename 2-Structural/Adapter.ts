class Shipping {
  zipStart: string
  zipEnd: string
  weight: string
  constructor(zipStart?: string, zipEnd?: string, weight?: string) {
    this.zipStart = zipStart
    this.zipEnd = zipEnd
    this.weight = weight
  }

  request = function (zipStart?: string, zipEnd?: string, weight?: string) {
    return '$49.75'
  }
}

class AdvancedShipping {
  login = function (credentials) {
    /* ... */
  }
  setStart = function (start) {
    /* ... */
  }
  setDestination = function (destination) {
    /* ... */
  }
  calculate = function (weight) {
    return '$39.50'
  }
}

interface Credentials {
  token: string
}

class ShippingAdapter {
  private shipping: AdvancedShipping

  constructor(credentials: Credentials) {
    this.shipping = new AdvancedShipping()
    this.shipping.login(credentials)
  }

  public request = function (zipStart, zipEnd, weight) {
    this.shipping.setStart(zipStart)
    this.shipping.setDestination(zipEnd)
    return this.shipping.calculate(weight)
  }
}

const shipping = new Shipping()
console.log(shipping.request())

const credentials = { token: '30a8-6ee1' }
const adapter = new ShippingAdapter(credentials)

// original shipping object and interface

let cost = shipping.request('78701', '10010', '2 lbs')
console.log('Old cost: ' + cost)

// new shipping object with adapted interface

cost = adapter.request('78701', '10010', '2 lbs')

console.log('New cost: ' + cost)
