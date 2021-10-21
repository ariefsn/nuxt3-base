import { IStore } from "~~/models"
import { counter } from "./counter"
import { person } from "./person"

const state = () => <IStore>{
  counter: counter().value,
  person: person().value
}

export default state