import React from 'react'
import { IconProps } from './types'

const IconDestructionOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-80q-33 0-56.5-23.5T120-160v-160q0-33 23.5-56.5T200-400h560q33 0 56.5 23.5T840-320v160q0 33-23.5 56.5T760-80H200Zm61-380L60-574l240-40-65-235 199 141 120-212 40 240 235-65-141 199 152 86H261Z" />
  </svg>
)

export { IconDestructionOutlinedFilled as default }
