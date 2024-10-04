import React from 'react'
import { IconProps } from './types.js'

export const IconNestFoundSavingsOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-40 360-160H200q-33 0-56.5-23.5T120-240v-560q0-33 23.5-56.5T200-880h560q33 0 56.5 23.5T840-800v560q0 33-23.5 56.5T760-160H600L480-40Zm0-280q86 0 143-60t57-140v-200H480q-81 0-140.5 57T280-520q0 30 8.5 57t23.5 50l-16 16q-12 12-12 28t12 28q12 12 27.5 11.5T352-341l15-14q24 17 52.5 26t60.5 9Zm50-255q12 12 12 28.5T530-518l-75 75q-12 12-28.5 12T398-443q-11-12-11-28.5t11-27.5l76-76q12-12 28-12t28 12Z" />
  </svg>
)