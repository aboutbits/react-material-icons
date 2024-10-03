import React from 'react'
import { IconProps } from './types.js'

export const IconTurnSlightRightSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M360-160v-336l224-224h-90v-80h226v226h-80v-90L440-464v304h-80Z" />
  </svg>
)
