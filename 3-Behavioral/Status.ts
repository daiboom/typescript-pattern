class TrafficLight {
  count = 0
  currentState = new Red(this)

  change = function (state) {
    // limits number of changes
    if (this.count++ >= 10) return
    this.currentState = state
    this.currentState.go()
  }

  start = function () {
    this.currentState.go()
  }
}

class Red {
  light: TrafficLight
  constructor(light: TrafficLight) {
    this.light = light
  }

  go = function () {
    console.log('Red --> for 1 minute')
    this.light.change(new Green(this.light))
  }
}

class Yellow {
  light: TrafficLight
  constructor(light: TrafficLight) {
    this.light = light
  }

  go = function () {
    console.log('Yellow --> for 10 seconds')
    this.light.change(new Red(this.light))
  }
}

class Green {
  light: TrafficLight
  constructor(light: TrafficLight) {
    this.light = light
  }

  go = function () {
    console.log('Green --> for 1 minute')
    this.light.change(new Yellow(this.light))
  }
}

const light = new TrafficLight()
light.start()
