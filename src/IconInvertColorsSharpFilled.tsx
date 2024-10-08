import React from 'react'
import { IconProps } from './types'

const IconInvertColorsSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-120q-133 0-226.5-92T160-435q0-66 25-122.5T254-658l226-222 226 222q44 44 69 100.5T800-435q0 131-93.5 223T480-120Zm0-80v-568L310-600q-35 33-52.5 75T240-435q0 97 70 166t170 69Z" />
  </svg>
)

export { IconInvertColorsSharpFilled as default }
