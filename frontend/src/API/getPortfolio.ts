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

export async function getPortfolioQuantity(url: string, figi: string) {
  const res = await axios.get(url);
  return await res.data.positions.filter((i:IPortfolioInstrument) => i.figi === figi);
}