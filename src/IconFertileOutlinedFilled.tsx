import React from 'react'
import { IconProps } from './types.js'

export const IconFertileOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480v-380l241 181q31-47 70.5-97T480-880q45 50 86 101.5t72 99.5l242-181v380q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z" />
  </svg>
)
