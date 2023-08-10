class CustomerPrototype {
  proto: any

  constructor(proto: any) {
    this.proto = proto
  }

  public clone = function () {
    const customer = new Customer()

    customer.first = this.proto.first
    customer.last = this.proto.last
    customer.status = this.proto.status

    return customer
  }
}

class Customer {
  first: string
  last: string
  status: string

  constructor(first?: string, last?: string, status?: string) {
    this.first = first
    this.last = last
    this.status = status
  }

  public say = function () {
    const self = this
    console.log(
      'name: ' + this.first + ' ' + this.last + ', status: ' + this.status
    )
  }
}

const proto = new Customer('n/a', 'n/a', 'pending')
const prototype = new CustomerPrototype(proto)

const customer = prototype.clone()
customer.say()
