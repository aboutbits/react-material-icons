import React from 'react'
import { IconProps } from './types.js'

export const IconMobileOffRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M792-56 56-792q-11-11-11-28t11-28q11-11 28-11t28 11l736 736q11 11 11 28t-11 28q-11 11-28 11t-28-11ZM200-703l80 80v383h384l96 96v24q0 33-23.5 56.5T680-40H280q-33 0-56.5-23.5T200-120v-583Zm80 543v40h400v-40H280Zm0 0v40-40Zm79-560q-17 0-28-11.5T320-760q0-17 11.5-28.5T360-800h320v-40H260q-17 0-28.5-11.5T220-880q0-17 11.5-28.5T260-920h420q33 0 56.5 23.5T760-840v480q0 17-11.5 28.5T720-320q-17 0-28.5-11.5T680-360v-360H359Zm98-80Z" />
  </svg>
)
