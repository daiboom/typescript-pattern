class StrategyShipping {
  company = ''

  setStrategy = function (company) {
    this.company = company
  }

  calculate = function (pkg: any) {
    return this.company.calculate(pkg)
  }
}

class UPS {
  calculate = function (pkg) {
    // calculations...
    return '$45.95'
  }
}

class USPS {
  calculate = function (pkg) {
    // calculations...
    return '$39.40'
  }
}

class Fedex {
  calculate = function (pkg) {
    // calculations...
    return '$43.20'
  }
}

const pkg = { from: '76712', to: '10012', weigth: 'lkg' }

// the 3 strategies

const ups = new UPS()
const usps = new USPS()
const fedex = new Fedex()

const strategyShipping = new StrategyShipping()
strategyShipping.setStrategy(ups)
console.log('UPS Strategy: ' + strategyShipping.calculate(pkg))
strategyShipping.setStrategy(usps)
console.log('USPS Strategy: ' + strategyShipping.calculate(pkg))
strategyShipping.setStrategy(fedex)
console.log('Fedex Strategy: ' + strategyShipping.calculate(pkg))
