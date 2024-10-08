import React from 'react'
import { IconProps } from './types'

const IconEdaOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M280-40q-66 0-113-47t-47-113v-120h218l136 181 247-247 49-30q20-13 44-11t44 16l63 47L632-75q-17 17-39 26t-46 9H280ZM120-400v-360q0-17 11.5-28.5T160-800q17 0 28.5 11.5T200-760v280h80v-360q0-17 11.5-28.5T320-880q17 0 28.5 11.5T360-840v360h80v-400q0-17 11.5-28.5T480-920q17 0 28.5 11.5T520-880v400h80v-320q0-17 11.5-28.5T640-840q17 0 28.5 11.5T680-800v343L482-261 378-400H120Z" />
  </svg>
)

export { IconEdaOutlinedFilled as default }
