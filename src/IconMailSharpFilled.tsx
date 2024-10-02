import React from 'react'
import { IconProps } from './types'

export const IconMailSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-160v-640h800v640H80Zm400-280 320-200v-80L480-520 160-720v80l320 200Z" />
  </svg>
)
