import React from 'react'
import { IconProps } from './types'

const IconVpnKeyAlertRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M280-400q33 0 56.5-23.5T360-480q0-33-23.5-56.5T280-560q-33 0-56.5 23.5T200-480q0 33 23.5 56.5T280-400Zm0 160q-100 0-170-70T40-480q0-100 70-170t170-70q81 0 141.5 45.5T506-560h214q17 0 28.5 11.5T760-520v240q0 17-11.5 28.5T720-240q-17 0-28.5-11.5T680-280v-120H506q-24 69-84.5 114.5T280-240Zm600 0q-17 0-28.5-11.5T840-280q0-17 11.5-28.5T880-320q17 0 28.5 11.5T920-280q0 17-11.5 28.5T880-240Zm0-160q-17 0-28.5-11.5T840-440v-120q0-17 11.5-28.5T880-600q17 0 28.5 11.5T920-560v120q0 17-11.5 28.5T880-400Z" />
  </svg>
)

export { IconVpnKeyAlertRoundedFilled as default }
