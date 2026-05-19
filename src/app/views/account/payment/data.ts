const mastercard = 'assets/img/account/mastercard.svg'
const visa = 'assets/img/account/visa.svg'
const amex = 'assets/img/account/amex.svg'
const bitcoin = 'assets/img/account/bitcoin.svg'

export type PaymentMethodType = {
  title: string
  value: string
  expiryOrKey: string
  image: string
  imageAlt: string
  primary?: boolean
}

export const paymentMethodsData: PaymentMethodType[] = [
  {
    title: '**** **** **** 4298',
    value: 'Expiration 09/26',
    image: mastercard,
    imageAlt: 'Mastercard',
    primary: true,
    expiryOrKey: 'Expiration 09/26',
  },
  {
    title: '**** **** **** 9276',
    value: 'Expiration 11/25',
    image: visa,
    imageAlt: 'Visa',
    expiryOrKey: 'Expiration 11/25',
  },
  {
    title: '**** **** **** 3854',
    value: 'Expiration 03/26',
    image: amex,
    imageAlt: 'Amex',
    expiryOrKey: 'Expiration 03/26',
  },
  {
    title: 'Bitcoin (BTC)',
    value: '•••••••••• UNky',
    image: bitcoin,
    imageAlt: 'Bitcoin',
    expiryOrKey: '•••••••••• UNky',
  },
]