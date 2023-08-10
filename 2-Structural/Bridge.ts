// output devices

class BridgeScreen {
  public click = function () {
    console.log('Screen select')
  }
  public move = function () {
    console.log('Screen move')
  }
  public drag = function () {
    console.log('Screen drag')
  }
  public zoom = function () {
    console.log('Screen zoom in')
  }
}

class BridgeAudio {
  public click = function () {
    console.log('Sound oink')
  }
  public move = function () {
    console.log('Sound waves')
  }
  public drag = function () {
    console.log('Sound screetch')
  }
  public zoom = function () {
    console.log('Sound volume up')
  }
}

class Mouse {
  private output
  constructor(output) {
    this.output = output
  }

  public click = function () {
    this.output.click()
  }
  public move = function () {
    this.output.move()
  }
  public down = function () {
    this.output.drag()
  }
  public wheel = function () {
    this.output.zoom()
  }
}

// input devices
class Gestures {
  private output
  constructor(output) {
    console.log(output)
    this.output = output
  }

  public tap = function () {
    this.output.click()
  }
  public swipe = function () {
    this.output.move()
  }
  public pan = function () {
    this.output.drag()
  }
  public pinch = function () {
    this.output.zoom()
  }
}

const bridgeScreen = new BridgeScreen()
const audio = new BridgeAudio()
const hand = new Gestures(bridgeScreen)
const mouse = new Mouse(audio)

hand.tap()
hand.swipe()
hand.pinch()

mouse.click()
mouse.move()
mouse.wheel()
