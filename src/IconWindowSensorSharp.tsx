import React from 'react'
import { IconProps } from './types'

const IconWindowSensorSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M880-600q-17 0-28.5-11.5T840-640v-160q0-17 11.5-28.5T880-840q17 0 28.5 11.5T920-800v160q0 17-11.5 28.5T880-600ZM120-120v-720h640v720H120Zm80-400h200v-40h80v40h200v-240H200v240Zm0 320h480v-240H200v240Zm0 0h480-480Z" />
  </svg>
)

export { IconWindowSensorSharp as default }