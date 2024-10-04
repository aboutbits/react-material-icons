import React from 'react'
import { IconProps } from './types.js'

export const IconGMobiledataOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M360-280q-33 0-56.5-23.5T280-360v-240q0-33 23.5-56.5T360-680h200q33 0 56.5 23.5T640-600H360v240h200v-80h-80v-80h160v160q0 33-23.5 56.5T560-280H360Z" />
  </svg>
)
