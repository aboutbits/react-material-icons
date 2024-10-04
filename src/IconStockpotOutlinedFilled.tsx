import React from 'react'
import { IconProps } from './types'

const IconStockpotOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M240-160q-50 0-85-35t-35-85v-360h720v360q0 50-35 85t-85 35H240ZM120-680v-80h240v-40q0-17 11.5-28.5T400-840h160q17 0 28.5 11.5T600-800v40h240v80H120Z" />
  </svg>
)

export { IconStockpotOutlinedFilled as default }
