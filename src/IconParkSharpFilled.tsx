import React from 'react'
import { IconProps } from './types.js'

export const IconParkSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M558-80H402v-160H120l160-240h-80l280-400 280 400h-80l160 240H558v160Z" />
  </svg>
)
