export type PositionState = {
  figi: string,
  name: string,
  ticker: string,
  exchange: string,
  country: string,
  currency: string, 
  countryOfRisk: string,
  countryOfRiskName: string,
  instrumentType: string,
  isSellAvailable: boolean,
  isBuyAvailable: boolean,
  portfolioQuantity: number,
}