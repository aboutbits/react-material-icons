import React from 'react'
import { IconProps } from './types.js'

export const IconNewLabelSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M448-160q16-27 24-57.5t8-62.5q0-100-70-170t-170-70q-45 0-86 16t-74 45v-341h560l240 320-240 320H448Zm-248 40v-120H80v-80h120v-120h80v120h120v80H280v120h-80Z" />
  </svg>
)
