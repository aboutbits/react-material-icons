import React from 'react'
import { IconProps } from './types'

const IconStat0OutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-200 200-480l280-280 280 280-280 280Z" />
  </svg>
)

export { IconStat0OutlinedFilled as default }
