import React from 'react'
import { IconProps } from './types'

export const IconTrailLengthShortOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M600-280q-73 0-127.5-45.5T404-440H160v-80h244q5-23 13.5-43t22.5-37H240v-80h360q83 0 141.5 58.5T800-480q0 83-58.5 141.5T600-280Zm-320 0v-80h120v80H280Z" />
  </svg>
)
