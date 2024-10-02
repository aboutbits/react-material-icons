import React from 'react'
import { IconProps } from './types'

export const IconTooltip2SharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M240-400h320v-80H240v80Zm0-120h480v-80H240v80Zm0-120h480v-80H240v80ZM480-80 373-240H80v-640h800v640H587L480-80Z" />
  </svg>
)
