import React from 'react'
import { IconProps } from './types'

const IconSpeed15xSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M240-280v-80h80v80h-80Zm-120 0v-320H40v-80h160v400h-80Zm500 0 120-200-120-200h80l80 133 80-133h80L820-480l120 200h-80l-80-133-80 133h-80Zm-260 0v-80h140v-80H360v-240h220v80H440v80h140v240H360Z" />
  </svg>
)

export { IconSpeed15xSharpFilled as default }
