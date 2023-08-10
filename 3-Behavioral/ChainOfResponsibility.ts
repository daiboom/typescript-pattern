class ResponsibilityRequest {
  public amount: number
  public get: (bill: number) => this

  constructor(amount: number) {
    this.amount = amount
    console.log('Requested: $' + amount + '\n')
  }
}

ResponsibilityRequest.prototype = {
  ...ResponsibilityRequest.prototype,
  get: function (bill: number) {
    const count = Math.floor(this.amount / bill)
    this.amount -= count * bill

    console.log('Dispense ' + count + ' $' + bill + ' bills')

    return this
  },
}

const responsibilityRequest = new ResponsibilityRequest(378)

responsibilityRequest.get(100).get(50).get(20).get(10).get(5).get(1)
