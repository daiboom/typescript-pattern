class User {
  userName: string
  constructor(userName) {
    this.userName = userName
  }

  say = function () {
    console.log('User: ' + this.userName)
  }
}

class DecoratedUser {
  user: {}
  userName: string
  street: string
  city: string

  constructor(user, street, city) {
    this.user = user
    this.userName = user.userName // ensures interface stays the same
    this.street = street
    this.city = city
  }

  say = function () {
    console.log(
      'Decorated User: ' + this.userName + ', ' + this.street + ', ' + this.city
    )
  }
}

const user = new User('Mike')
user.say()
const decorated = new DecoratedUser(user, 'Broadway', 'New York')
decorated.say()
