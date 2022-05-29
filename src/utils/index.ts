import { IPhone } from '../ts/interfaces';

export const phoneFormatter = (phone: IPhone) => {
  return `+${phone.ddi} ${phone.ddd} ${phone.number.slice(
    0,
    4
  )} ${phone.number.slice(4)}`;
};

export const cpfFormatter = (str: string) => {
  return `${str.substring(0, 3)} ${str.substring(3, 6)} ${str.substring(
    6,
    9
  )} ${str.substring(9, 11)}`;
};
