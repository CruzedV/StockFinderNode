import { AssetInstrument } from "../Types/Asset/AssetInstrument";

export interface IAsset {
  uid: string,
  type: number,
  name: string,
  instruments: Array<AssetInstrument>,
}