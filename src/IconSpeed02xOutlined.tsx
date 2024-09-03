import React from 'react'
import { IconProps } from './types'

const IconSpeed02xOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-280v-80h80v80h-80Zm120 0v-160q0-33 23.5-56.5T320-520h80v-80H240v-80h160q33 0 56.5 23.5T480-600v80q0 33-23.5 56.5T400-440h-80v80h160v80H240Zm280 0 120-200-120-200h80l80 133 80-133h80L720-480l120 200h-80l-80-133-80 133h-80Z" />
  </svg>
)

export { IconSpeed02xOutlined as default }