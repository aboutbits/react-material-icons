import React from 'react'
import { IconProps } from './types.js'

export const IconBatterySaverSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M640-80v-120H520v-80h120v-120h80v120h120v80H720v120h-80Zm-360 0v-720h120v-80h160v80h120v320q-100 1-170 70.5T440-240q0 46 16 87t45 73H280Z" />
  </svg>
)
