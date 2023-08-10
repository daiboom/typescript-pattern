class Participant {
  name: string
  chatroom: Chatroom

  constructor(name) {
    this.name = name
    this.chatroom = null
  }

  send: (message: string, to?: Participant) => void
  receive: (message: string, from: Participant) => void
}

Participant.prototype = {
  ...Participant.prototype,
  send: function (message, to) {
    this.chatroom.send(message, this, to)
  },
  receive: function (message, from) {
    console.log(from.name + ' to ' + this.name + ': ' + message)
  },
}

class Chatroom {
  participants = {}

  register = function (participant: Participant) {
    this.participants[participant.name] = participant
    participant.chatroom = this
  }

  send = function (message: string, from: Participant, to: Participant) {
    if (to) {
      // single message
      to.receive(message, from)
    } else {
      // broadcast message
      for (const key in this.participants) {
        if (this.participants[key] !== from) {
          this.participants[key].receive(message, from)
        }
      }
    }
  }
}

function runParticipant() {
  const yoko = new Participant('Yoko')
  const john = new Participant('John')
  const paul = new Participant('Paul')
  const ringo = new Participant('Ringo')

  const chatroom = new Chatroom()
  chatroom.register(yoko)
  chatroom.register(john)
  chatroom.register(paul)
  chatroom.register(ringo)

  // @ts-ignore
  yoko.send('All you need is love.')
  yoko.send('I love you John.')
  john.send('Hey, no need to broadcast', yoko)
  paul.send('Ha, I heard that!')
  ringo.send('Paul, what do you think?', paul)
}

runParticipant()
