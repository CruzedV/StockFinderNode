import axios from "axios"

import { IPortfolioInstrument } from "../Interfaces/IPortfolioInstrument";
import { PortfolioTotal } from "../Types/Portfolio/PortfolioTotal";
import { InstrumentBlank } from "./InstrumentBlank";

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
    return InstrumentBlank as IPortfolioInstrument
  }
}

export async function getPortfolioCurrency(url: string, currency: string) {
  try {
    const res = await axios.get(url)
    let figi = "RUB000UTSTOM"
    if (currency === "rub") {
      figi = "RUB000UTSTOM"
    } else if (currency === "usd") {
      figi = "BBG0013HGFT4"
    } else if (currency === "eur") {
      figi = "BBG0013HJJ31"
    }
    return res.data.positions.filter((i:IPortfolioInstrument) => i.figi === figi)[0]
  } catch (error) {
    return InstrumentBlank as IPortfolioInstrument
  }
}