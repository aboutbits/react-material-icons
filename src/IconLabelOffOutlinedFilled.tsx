import React from 'react'
import { IconProps } from './types.js'

export const IconLabelOffOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M757-317 274-800h326q19 0 36 8.5t28 23.5l216 288-123 163Zm63 289L661-187q-10 13-24 20t-31 7H160q-33 0-56.5-23.5T80-240v-480q0-11 2.5-20.5T90-758l-62-62 56-56L876-84l-56 56Z" />
  </svg>
)
