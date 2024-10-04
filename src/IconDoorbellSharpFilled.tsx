import React from 'react'
import { IconProps } from './types'

const IconDoorbellSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-260q17 0 28.5-11.5T520-300h-80q0 17 11.5 28.5T480-260Zm-160-60h320v-40h-40v-94q0-44-24-80t-66-46v-40h-60v40q-42 10-66 46t-24 80v94h-40v40ZM160-120v-480l320-240 320 240v480H160Z" />
  </svg>
)

export { IconDoorbellSharpFilled as default }
