import React from 'react'
import { IconProps } from './types'

const IconNoBackpackRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M760-330q-8 0-15-2.5t-13-8.5L303-771q-11-11-17-25.5t-6-30.5v-13q0-17 11.5-28.5T320-880h40q17 0 28.5 11.5T400-840v40h160v-40q0-17 11.5-28.5T600-880h40q17 0 28.5 11.5T680-840v46q52 14 86 56t34 98v270q0 18-12 29t-28 11ZM240-80q-33 0-56.5-23.5T160-160v-480q0-33 12.5-62t34.5-51l39 39v113L84-763q-11-11-11-27.5T84-819q12-12 28.5-12t28.5 12l678 679q11 11 11.5 27.5T819-84q-11 11-28 11t-28-11L663-184h112l25 24q0 33-23.5 56.5T720-80H240Zm207-320-80-80h-27q-17 0-28.5 11.5T300-440q0 17 11.5 28.5T340-400h107Z" />
  </svg>
)

export { IconNoBackpackRoundedFilled as default }
