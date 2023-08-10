class IteratorClass {
  index
  items
  constructor(items) {
    this.index = 0
    this.items = items
  }
  first: () => void
  next: () => void
  hasNext: () => boolean
  reset: () => void
  each: (callback) => void
}

IteratorClass.prototype = {
  ...IteratorClass.prototype,
  first: function () {
    this.reset()
    return this.next()
  },
  next: function () {
    return this.items[this.index++]
  },
  hasNext: function () {
    return this.index <= this.items.length
  },
  reset: function () {
    this.index = 0
  },
  each: function (callback) {
    for (var item = this.first(); this.hasNext(); item = this.next()) {
      callback(item)
    }
  },
}

function runIteratorClass() {
  var items = ['one', 2, 'circle', true, 'Applepie']
  var iter = new IteratorClass(items)

  // using for loop

  for (var item = iter.first(); iter.hasNext(); item = iter.next()) {
    console.log(item)
  }
  console.log('')

  // using Iterator's each method

  iter.each(function (item) {
    console.log(item)
  })
}

runIteratorClass()
