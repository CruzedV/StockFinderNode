import axios from "axios"

import { IPortfolioInstrument } from "../Interfaces/IPortfolioInstrument";
import { PortfolioTotal } from "../Types/Portfolio/PortfolioTotal";

export async function getPortfolioPositions(url:string) {
  const res = await axios.get(url);
  return await res.data.positions as Array<IPortfolioInstrument>
}

export async function getPortfolioTotal(url:string) {
  const res = await axios.get(url)
  return await {
    totalAmountShares: res.data.totalAmountShares.units + (res.data.totalAmountShares.nano/Math.pow(10, 9)),
    totalAmountBonds: res.data.totalAmountBonds.units + (res.data.totalAmountBonds.nano/Math.pow(10, 9)),
    totalAmountEtf: res.data.totalAmountEtf.units + (res.data.totalAmountEtf.nano/Math.pow(10, 9)),
    totalAmountCurrencies: res.data.totalAmountCurrencies.units + (res.data.totalAmountCurrencies.nano/Math.pow(10, 9)),
    totalAmountFutures: res.data.totalAmountFutures.units + (res.data.totalAmountFutures.nano/Math.pow(10, 9)),
    expectedYield: res.data.expectedYield.units + (res.data.expectedYield.nano/Math.pow(10, 9)),
  } as PortfolioTotal
}

export async function getPortfolioInstrument(url: string, figi: string) {
  try {
    const res = await axios.get(url);
    return res.data.positions.filter((i:IPortfolioInstrument) => i.figi === figi)[0];
  } catch {
    const InstrumentBlank = {
      quantity: { units: 0, nano: 0, currency: ""},
      averagePositionPrice: { units: 0, nano: 0, currency: ""},
      averagePositionPriceFifo: { units: 0, nano: 0, currency: ""},
      averagePositionPricePt: { units: 0, nano: 0, currency: ""},
      blocked: false,
      currentPrice: { units: 0, nano: 0, currency: ""},
      expectedYield: { units: 0, nano: 0, currency: ""},
      figi: "",
      instrumentType: "",
      quantityLots: { units: 0, nano: 0, currency: ""},
    }
    return InstrumentBlank as IPortfolioInstrument
  }
}