import { IShare } from "../../Interfaces/Instruments/IShare"

export type BodyState = {
  data: Array<IShare>,
  page: number,
}