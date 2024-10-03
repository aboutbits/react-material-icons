import React from 'react'
import { IconProps } from './types.js'

export const IconBentoSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M640-520h240v-240H640v240ZM80-200h480v-560H80v560Zm240-220q-25 0-42.5-17.5T260-480q0-25 17.5-42.5T320-540q25 0 42.5 17.5T380-480q0 25-17.5 42.5T320-420Zm320 220h240v-240H640v240Z" />
  </svg>
)
