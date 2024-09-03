import React from 'react'
import { IconProps } from './types'

const IconCurrencyYuanOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M440-120v-280H240v-80h189L200-840h95l185 292 185-292h95L531-480h189v80H520v280h-80Z" />
  </svg>
)

export { IconCurrencyYuanOutlinedFilled as default }
