import React from 'react'
import { IconProps } from './types'

const IconArrowsMoreUpRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M520-200q-17 0-28.5-11.5T480-240v-320H160q-17 0-28.5-11.5T120-600q0-17 11.5-28.5T160-640h360q17 0 28.5 11.5T560-600v360q0 17-11.5 28.5T520-200Zm200-200q-17 0-28.5-11.5T680-440v-320H360q-17 0-28.5-11.5T320-800q0-17 11.5-28.5T360-840h360q17 0 28.5 11.5T760-800v360q0 17-11.5 28.5T720-400Z" />
  </svg>
)

export { IconArrowsMoreUpRoundedFilled as default }
