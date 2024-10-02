import React from 'react'
import { IconProps } from './types'

export const IconPackage2SharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M440-91v-366L120-642v367L440-91Zm80 0 320-184v-367L520-457v366Zm159-550 118-69-317-182-119 68 318 183ZM480-526l119-68-317-184-120 69 318 183Z" />
  </svg>
)
