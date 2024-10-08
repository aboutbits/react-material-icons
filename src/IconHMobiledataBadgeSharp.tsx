import React from 'react'
import { IconProps } from './types'

const IconHMobiledataBadgeSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M320-280h80v-160h160v160h80v-400h-80v160H400v-160h-80v400ZM120-120v-720h720v720H120Zm80-80h560v-560H200v560Zm0-560v560-560Z" />
  </svg>
)

export { IconHMobiledataBadgeSharp as default }
