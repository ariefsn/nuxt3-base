import { IStore } from "@/models"
import { counter } from "./counter"
import { person } from "./person"
import { useState } from '#app'

const store = () => <IStore>{
  counter: counter(),
  person: person()
}

export default store