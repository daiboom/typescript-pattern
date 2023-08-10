class VisitorEmployee {
  public name: string
  public salary: number
  public vacation: number

  constructor(name: string, salary: number, vacation: number) {
    this.name = name
    this.salary = salary
    this.vacation = vacation
  }

  public accept = function (visitor: any) {
    visitor.visit(this)
  }

  public getName = function () {
    return this.name
  }

  public getSalary = function () {
    return this.salary
  }

  public setSalary = function (sal: number) {
    this.salary = sal
  }

  public getVacation = function () {
    return this.vacation
  }

  public setVacation = function (vac: number) {
    this.vacation = vac
  }
}

class ExtraSalary {
  public visit = function (emp: any) {
    emp.setSalary(emp.getSalary() * 1.1)
  }
}

class ExtraVacation {
  public visit = function (emp: any) {
    emp.setVacation(emp.getVacation() + 2)
  }
}

const employees = [
  new VisitorEmployee('John', 10000, 10),
  new VisitorEmployee('Mary', 20000, 21),
  new VisitorEmployee('Boss', 250000, 51),
]

const visitorSalary = new ExtraSalary()
const visitorVacation = new ExtraVacation()

for (let i = 0, len = employees.length; i < len; i++) {
  const emp = employees[i]

  emp.accept(visitorSalary)
  emp.accept(visitorVacation)
  console.log(
    emp.getName() +
      ': $' +
      emp.getSalary() +
      ' and ' +
      emp.getVacation() +
      ' vacation days'
  )
}
