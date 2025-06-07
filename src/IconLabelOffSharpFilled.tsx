import React from 'react'
import { IconProps } from './types.js'

export const IconLabelOffSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M757-317 274-800h366l240 320-123 163Zm63 289L688-160H80v-608l-52-52 56-56L876-84l-56 56Z" />
  </svg>
)
