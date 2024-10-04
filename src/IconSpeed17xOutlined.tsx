import React from 'react'
import { IconProps } from './types'

const IconSpeed17xOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M240-280v-80h80v80h-80Zm-120 0v-320H40v-80h160v400h-80Zm480 0 120-200-120-200h80l80 133 80-133h80L800-480l120 200h-80l-80-133-80 133h-80Zm-200 0 80-320H320v-80h170q29 0 49.5 21.5T560-608l-2 18-78 310h-80Z" />
  </svg>
)

export { IconSpeed17xOutlined as default }
