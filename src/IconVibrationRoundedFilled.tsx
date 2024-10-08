import React from 'react'
import { IconProps } from './types'

const IconVibrationRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M40-600q17 0 28.5 11.5T80-560v160q0 17-11.5 28.5T40-360q-17 0-28.5-11.5T0-400v-160q0-17 11.5-28.5T40-600Zm120-80q17 0 28.5 11.5T200-640v320q0 17-11.5 28.5T160-280q-17 0-28.5-11.5T120-320v-320q0-17 11.5-28.5T160-680Zm760 80q17 0 28.5 11.5T960-560v160q0 17-11.5 28.5T920-360q-17 0-28.5-11.5T880-400v-160q0-17 11.5-28.5T920-600Zm-120-80q17 0 28.5 11.5T840-640v320q0 17-11.5 28.5T800-280q-17 0-28.5-11.5T760-320v-320q0-17 11.5-28.5T800-680ZM320-120q-33 0-56.5-23.5T240-200v-560q0-33 23.5-56.5T320-840h320q33 0 56.5 23.5T720-760v560q0 33-23.5 56.5T640-120H320Z" />
  </svg>
)

export { IconVibrationRoundedFilled as default }
