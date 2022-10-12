const exchangeRate = Number(389);
const exchangeRateBUSD = Number(1);
const exchangeRateCONT = Number(0.6);

const serviceFee = Number(process.env.SERVICE_FEE);

export const amountReceived = (amount: number): number => {
  return ((100 - serviceFee) * amount) / 100;
};
export const amountWithServiceFee = (amount: number): string => {
  return Number((serviceFee * amount) / 100 + amount).toFixed(2);
};

export const amountDollarWithServiceFee = (amount: number): string => {
  return Number(((serviceFee * amount) / 100 + amount) * exchangeRate).toFixed(2);
};
export const amountReceivedDollar = (amount: number): number => {
  return ((100 - serviceFee) * amount * exchangeRate) / 100;
};

export const amountDollarBNB = (amount: number): string => {
  return Number(amount * exchangeRate).toFixed(2);
};
export const amountDollarBNBrevieved = (amount: number): string => {
  return Number(amount * exchangeRate * (100 - serviceFee)/100).toFixed(3);
};
export const amountDollarBUSD = (amount: number): string => {
  return Number(amount * exchangeRateBUSD).toFixed(2);
};
export const amountDollarBUSDrecieved = (amount: number): string => {
  return Number(amount * exchangeRateBUSD* (100 - serviceFee)/100).toFixed(3);
};
export const amountDollarCONT = (amount: number): string => {
  return Number(amount * exchangeRateCONT).toFixed(2);
};
export const amountDollarCONTrecieved = (amount: number): string => {
  return Number(amount * exchangeRateCONT * (100 - serviceFee)/100).toFixed(3);
};
