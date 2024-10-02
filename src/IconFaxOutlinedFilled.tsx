import React from 'react'
import { IconProps } from './types'

export const IconFaxOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M320-160v-640h400v200h40q50 0 85 35t35 85v320H320Zm-140 40q42 0 71-29t29-71v-320q0-42-29-71t-71-29q-42 0-71 29t-29 71v320q0 42 29 71t71 29Zm220-480h240v-120H400v120Zm240 200q17 0 28.5-11.5T680-440q0-17-11.5-28.5T640-480q-17 0-28.5 11.5T600-440q0 17 11.5 28.5T640-400Zm120 0q17 0 28.5-11.5T800-440q0-17-11.5-28.5T760-480q-17 0-28.5 11.5T720-440q0 17 11.5 28.5T760-400ZM640-280q17 0 28.5-11.5T680-320q0-17-11.5-28.5T640-360q-17 0-28.5 11.5T600-320q0 17 11.5 28.5T640-280Zm120 0q17 0 28.5-11.5T800-320q0-17-11.5-28.5T760-360q-17 0-28.5 11.5T720-320q0 17 11.5 28.5T760-280Zm-360 0h160v-200H400v200Z" />
  </svg>
)
