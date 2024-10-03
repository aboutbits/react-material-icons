import React from 'react'
import { IconProps } from './types.js'

export const IconNewLabelOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M448-160q16-27 24-57.5t8-62.5q0-100-70-170t-170-70q-45 0-86 16t-74 45v-261q0-33 23.5-56.5T160-800h440q19 0 36 8.5t28 23.5l216 288-216 288q-11 15-28 23.5t-36 8.5H448Zm-248 40v-120H80v-80h120v-120h80v120h120v80H280v120h-80Z" />
  </svg>
)
