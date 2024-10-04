import React from 'react'
import { IconProps } from './types.js'

export const IconBackpackRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M240-80q-33 0-56.5-23.5T160-160v-480q0-56 34-98t86-56v-46q0-17 11.5-28.5T320-880h40q17 0 28.5 11.5T400-840v40h160v-40q0-17 11.5-28.5T600-880h40q17 0 28.5 11.5T680-840v46q52 14 86 56t34 98v480q0 33-23.5 56.5T720-80H240Zm340-320v40q0 17 11.5 28.5T620-320q17 0 28.5-11.5T660-360v-80q0-17-11.5-28.5T620-480H340q-17 0-28.5 11.5T300-440q0 17 11.5 28.5T340-400h240Z" />
  </svg>
)