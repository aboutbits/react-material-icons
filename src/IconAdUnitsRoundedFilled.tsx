import React from 'react'
import { IconProps } from './types'

const IconAdUnitsRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M360-600q-17 0-28.5-11.5T320-640q0-17 11.5-28.5T360-680h240q17 0 28.5 11.5T640-640q0 17-11.5 28.5T600-600H360ZM280-40q-33 0-56.5-23.5T200-120v-720q0-33 23.5-56.5T280-920h400q33 0 56.5 23.5T760-840v720q0 33-23.5 56.5T680-40H280Zm0-200h400v-480H280v480Z" />
  </svg>
)

export { IconAdUnitsRoundedFilled as default }
