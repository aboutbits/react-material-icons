import React from 'react'
import { IconProps } from './types.js'

export const IconThumbnailBarOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h160v640H160Zm240 0v-640h400q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H400Z" />
  </svg>
)
