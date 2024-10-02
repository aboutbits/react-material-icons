import React from 'react'
import { IconProps } from './types'

export const IconCurrencyRupeeRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M537-132 291-388q-5-5-8-12.5t-3-15.5v-24q0-17 11.5-28.5T320-480h100q53 0 91.5-34.5T558-600H280q-17 0-28.5-11.5T240-640q0-17 11.5-28.5T280-680h266q-17-35-50.5-57.5T420-760H280q-17 0-28.5-11.5T240-800q0-17 11.5-28.5T280-840h400q17 0 28.5 11.5T720-800q0 17-11.5 28.5T680-760h-90q14 17 25 37t17 43h48q17 0 28.5 11.5T720-640q0 17-11.5 28.5T680-600h-41q-8 85-70 142.5T420-400h-29l204 212q18 19 7.5 43.5T566-120q-8 0-15.5-3t-13.5-9Z" />
  </svg>
)
