import React from 'react'
import { IconProps } from './types'

export const IconFaxOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-120q-50 0-85-35t-35-85v-280q0-50 35-85t85-35q27 0 49.5 11t39.5 29h31v-200h400v200h40q50 0 85 35t35 85v320H289q-17 18-39.5 29T200-120Zm0-80q17 0 28.5-11.5T240-240v-280q0-17-11.5-28.5T200-560q-17 0-28.5 11.5T160-520v280q0 17 11.5 28.5T200-200Zm200-400h240v-120H400v120Zm-80 360h480v-240q0-17-11.5-28.5T760-520H320v280Zm280-160q17 0 28.5-11.5T640-440q0-17-11.5-28.5T600-480q-17 0-28.5 11.5T560-440q0 17 11.5 28.5T600-400Zm120 0q17 0 28.5-11.5T760-440q0-17-11.5-28.5T720-480q-17 0-28.5 11.5T680-440q0 17 11.5 28.5T720-400ZM600-280q17 0 28.5-11.5T640-320q0-17-11.5-28.5T600-360q-17 0-28.5 11.5T560-320q0 17 11.5 28.5T600-280Zm120 0q17 0 28.5-11.5T760-320q0-17-11.5-28.5T720-360q-17 0-28.5 11.5T680-320q0 17 11.5 28.5T720-280Zm-360 0h160v-200H360v200Zm-40 40v-280 280Z" />
  </svg>
)
