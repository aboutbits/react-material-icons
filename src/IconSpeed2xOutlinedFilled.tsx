import React from 'react'
import { IconProps } from './types'

export const IconSpeed2xOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-280v-160q0-33 23.5-56.5T280-520h80v-80H200v-80h160q33 0 56.5 23.5T440-600v80q0 33-23.5 56.5T360-440h-80v80h160v80H200Zm280 0 120-200-120-200h80l80 133 80-133h80L680-480l120 200h-80l-80-133-80 133h-80Z" />
  </svg>
)
