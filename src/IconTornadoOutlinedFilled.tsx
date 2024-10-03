import React from 'react'
import { IconProps } from './types.js'

export const IconTornadoOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M40-840h880L804-640H156L40-840Zm162 280h556l-70 120H272l-70-120Zm116 200h324L480-80 318-360Z" />
  </svg>
)
