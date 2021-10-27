import { useState } from '#app'
import { IStorePerson } from '@/models'

export const person = () => useState<IStorePerson>('person', () => <IStorePerson>{
  name: '',
  age: 0
})
