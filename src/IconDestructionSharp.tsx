import React from 'react'
import { IconProps } from './types'

const IconDestructionSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-80v-320h720v320H120Zm80-80h560v-160H200v160Zm61-300L60-574l240-40-65-235 199 141 120-212 40 240 235-65-141 199 152 86H678l-106-60 62-88-104 29-18-106-52 93-88-62 29 104-106 18 120 72H261Zm219 220Zm7-220Z" />
  </svg>
)

export { IconDestructionSharp as default }
