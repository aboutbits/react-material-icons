import React from 'react'
import { IconProps } from './types.js'

export const IconAodRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M390-380q-13 0-21.5-8.5T360-410q0-13 8.5-21.5T390-440h180q13 0 21.5 8.5T600-410q0 13-8.5 21.5T570-380H390Zm-40-120q-13 0-21.5-8.5T320-530q0-13 8.5-21.5T350-560h260q13 0 21.5 8.5T640-530q0 13-8.5 21.5T610-500H350ZM280-40q-33 0-56.5-23.5T200-120v-720q0-33 23.5-56.5T280-920h400q33 0 56.5 23.5T760-840v720q0 33-23.5 56.5T680-40H280Zm0-200h400v-480H280v480Z" />
  </svg>
)