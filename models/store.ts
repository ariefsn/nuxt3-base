export interface Ref<T> {
  value: T
}

export interface IStoreCounter {
  value: number
}

export interface IStorePerson {
  name: string
  age: number
}

export interface IStore {
  counter: IStoreCounter
  person: IStorePerson
}
