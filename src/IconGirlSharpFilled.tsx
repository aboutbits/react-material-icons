import React from 'react'
import { IconProps } from './types.js'

export const IconGirlSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-660q-29 0-49.5-20.5T410-730q0-29 20.5-49.5T480-800q29 0 49.5 20.5T550-730q0 29-20.5 49.5T480-660Zm-80 500v-160h-80l95-255q8-20 25.5-32.5T480-620q22 0 39.5 12.5T545-575l95 255h-80v160H400Z" />
  </svg>
)