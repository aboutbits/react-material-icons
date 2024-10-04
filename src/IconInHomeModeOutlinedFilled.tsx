import React from 'react'
import { IconProps } from './types'

const IconInHomeModeOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M597-80 428-250l56-57 113 113 227-226 56 57L597-80Zm-437-80v-375l-72 55-47-63 439-337 440 336-48 64-59-44-216 217-113-113-171 172 87 88H160Z" />
  </svg>
)

export { IconInHomeModeOutlinedFilled as default }
