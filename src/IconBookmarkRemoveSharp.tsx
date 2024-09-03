import React from 'react'
import { IconProps } from './types'

const IconBookmarkRemoveSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M840-680H600v-80h240v80ZM480-240 200-120v-720h320v80H280v518l200-86 200 86v-278h80v400L480-240ZM280-760h240-240Z" />
  </svg>
)

export { IconBookmarkRemoveSharp as default }
