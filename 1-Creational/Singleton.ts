class Singleton {
  private static instance = new Singleton()
  public static getInstance() {
    return this.instance
  }

  private data = {
    system: '',
  }

  constructor() {
    if (Singleton.instance) {
      throw new Error('Error: Instantiation failed')
    }

    Singleton.instance = this
  }

  public getStoreData() {
    return this.data
  }
}

const singleton1 = Singleton.getInstance()
const singleton2 = Singleton.getInstance()

console.log('singleton1: ', singleton1)
console.log('singleton2: ', singleton2)
console.log(singleton1 === singleton2)
