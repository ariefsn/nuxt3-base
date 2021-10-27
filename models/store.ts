import type { Ref } from '@vue/reactivity'

export interface IStoreCounter {
  value: number
}

export interface IStorePerson {
  name: string
  age: number
}

export interface IStore {
  counter: Ref<IStoreCounter>
  person: Ref<IStorePerson>
}
