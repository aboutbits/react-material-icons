import React from 'react'
import { IconProps } from './types'

const IconSpeed02xSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-280v-80h80v80h-80Zm120 0v-240h160v-80H240v-80h240v240H320v80h160v80H240Zm280 0 120-200-120-200h80l80 133 80-133h80L720-480l120 200h-80l-80-133-80 133h-80Z" />
  </svg>
)

export { IconSpeed02xSharpFilled as default }
