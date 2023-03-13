import { IBuyInstrument } from "../../Interfaces/IBuyInstrument"

export type SearchState = {
  query: string,
  data: Array<IBuyInstrument>,
}