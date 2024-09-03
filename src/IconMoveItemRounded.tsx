import React from 'react'
import { IconProps } from './types'

const IconMoveItemRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M806-440H360q-17 0-28.5-11.5T320-480q0-17 11.5-28.5T360-520h446l-34-34q-12-12-11.5-28t11.5-28q12-12 28.5-12.5T829-611l103 103q12 12 12 28t-12 28L829-349q-12 12-28.5 11.5T772-350q-11-12-11.5-28t11.5-28l34-34ZM600-640v-120H200v560h400v-120q0-17 11.5-28.5T640-360q17 0 28.5 11.5T680-320v120q0 33-23.5 56.5T600-120H200q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h400q33 0 56.5 23.5T680-760v120q0 17-11.5 28.5T640-600q-17 0-28.5-11.5T600-640Z" />
  </svg>
)

export { IconMoveItemRounded as default }