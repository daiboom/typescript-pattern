function add(x: number, y: number) {
  return x + y
}
function sub(x: number, y: number) {
  return x - y
}
function mul(x: number, y: number) {
  return x * y
}
function div(x: number, y: number) {
  return x / y
}

class Command {
  execute: Function
  undo: Function
  value: number

  constructor(execute: Function, undo: Function, value: any) {
    this.execute = execute
    this.undo = undo
    this.value = value
  }
}

const AddCommand = function (value: number) {
  return new Command(add, sub, value)
}

const SubCommand = function (value: number) {
  return new Command(sub, add, value)
}

const MulCommand = function (value: number) {
  return new Command(mul, div, value)
}

const DivCommand = function (value: number) {
  return new Command(div, mul, value)
}

class Calculator {
  private current = 0
  private commands = []

  public action(command: Command) {
    const name = command.execute.toString().substring(9, 3)
    return name.charAt(0).toUpperCase() + name.slice(1)
  }

  public execute = function (command: Command) {
    this.current = command.execute(this.current, command.value)
    this.commands.push(command)
    console.log('command history:', this.commands)
    console.log(this.action(command) + ': ' + command.value)
  }

  public undo = function () {
    const command = this.commands.pop()
    this.current = command.undo(this.current, command.value)
    console.log('command history:', this.commands)
    console.log('Undo ' + this.action(command) + ': ' + command.value)
  }

  public getCurrentValue = function () {
    return this.current
  }
}

const calculator = new Calculator()

// issue commands
calculator.execute(AddCommand(100))
calculator.execute(SubCommand(24))
calculator.execute(MulCommand(6))
calculator.execute(DivCommand(2))

// reverse last two commands
calculator.undo()
calculator.undo()

console.log('\nValue: ' + calculator.getCurrentValue())
