import React from 'react'
import { IconProps } from './types'

const IconMobileFriendlyOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M240-40q-33 0-56.5-23.5T160-120v-720q0-33 23.5-56.5T240-920h400q33 0 56.5 23.5T720-840v160h-80v-40H240v480h400v-40h80v160q0 33-23.5 56.5T640-40H240Zm358-280L428-490l56-56 114 114 226-226 56 56-282 282Z" />
  </svg>
)

export { IconMobileFriendlyOutlinedFilled as default }
