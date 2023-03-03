import { IBuyInstrument } from "../../Interfaces/IBuyInstrument"

export type ListState = {
  data: Array<IBuyInstrument>,
  page: number,
  type: "shares"|"bonds"|"currency"|"etf"
}