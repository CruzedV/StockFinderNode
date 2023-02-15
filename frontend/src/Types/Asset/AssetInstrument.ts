import { InstrumentLink } from "../Instrument/InstrumentLink"

export type AssetInstrument = {
    uid: string,
    figi: string,
    instrumentType: string,
    ticker: string,
    classCode: string,
    links: Array<InstrumentLink>,
    instrumentKind: number,
}