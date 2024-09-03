import React from 'react'
import { IconProps } from './types'

const IconPulseAlertOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M121-480q-22-35-31.5-69.5T80-621q0-94 63-156.5T300-840q51 0 98.5 22t81.5 62q34-40 81-62t99-22q94 0 157 63.5T880-619q-32-29-73-45t-87-16q-90 0-156 57.5T484-480h-62l-68-102q-6-9-14.5-13.5T321-600q-10 0-19 4.5T287-582l-69 102h-97Zm359 360L353-234q-61-55-101.5-94.5T182-400h58q10 0 19-5t14-13l47-70 47 70q5 8 14 13t19 5h84q9 55 40.5 99t78.5 70L480-120Zm240-160q-17 0-28.5-11.5T680-320q0-17 11.5-28.5T720-360q17 0 28.5 11.5T760-320q0 17-11.5 28.5T720-280Zm-40-120v-200h80v200h-80Z" />
  </svg>
)

export { IconPulseAlertOutlinedFilled as default }
