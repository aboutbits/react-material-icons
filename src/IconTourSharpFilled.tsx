import React from 'react'
import { IconProps } from './types'

const IconTourSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-80v-800h80v80h560l-80 200 80 200H280v320h-80Zm300-440q33 0 56.5-23.5T580-600q0-33-23.5-56.5T500-680q-33 0-56.5 23.5T420-600q0 33 23.5 56.5T500-520Z" />
  </svg>
)

export { IconTourSharpFilled as default }
