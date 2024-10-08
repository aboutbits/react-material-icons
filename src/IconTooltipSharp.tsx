import React from 'react'
import { IconProps } from './types'

const IconTooltipSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-80 374-240H80v-640h800v640H586L480-80ZM160-320h640v-480H160v480Zm0 0v-480 480Z" />
  </svg>
)

export { IconTooltipSharp as default }
