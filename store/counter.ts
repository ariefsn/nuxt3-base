import { useState } from '#app'
import { IStoreCounter } from '@/models'

export const counter = () => useState<IStoreCounter>('counter', () => <IStoreCounter>{
  value: 0
})
