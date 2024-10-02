import React from 'react'
import { IconProps } from './types'

export const IconAlignStretchRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M320-560q-17 0-28.5-11.5T280-600v-200H120q-17 0-28.5-11.5T80-840q0-17 11.5-28.5T120-880h720q17 0 28.5 11.5T880-840q0 17-11.5 28.5T840-800H680v200q0 17-11.5 28.5T640-560H320ZM120-80q-17 0-28.5-11.5T80-120q0-17 11.5-28.5T120-160h160v-200q0-17 11.5-28.5T320-400h320q17 0 28.5 11.5T680-360v200h160q17 0 28.5 11.5T880-120q0 17-11.5 28.5T840-80H120Z" />
  </svg>
)
