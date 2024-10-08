import React from 'react'
import { IconProps } from './types'

const IconStockpotSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-160v-480h720v480H120Zm0-520v-80h240v-80h240v80h240v80H120Z" />
  </svg>
)

export { IconStockpotSharpFilled as default }
