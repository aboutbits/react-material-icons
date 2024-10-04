import React from 'react'
import { IconProps } from './types.js'

export const IconSpeed07xOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m520-280 120-200-120-200h80l80 133 80-133h80L720-480l120 200h-80l-80-133-80 133h-80Zm-360 0v-80h80v80h-80Zm160 0 80-320H240v-80h170q29 0 49.5 21.5T480-608l-2 18-78 310h-80Z" />
  </svg>
)