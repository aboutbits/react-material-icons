import React from 'react'
import { IconProps } from './types.js'

export const IconSpeed12xOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M240-280v-80h80v80h-80Zm120 0v-160q0-33 23.5-56.5T440-520h60v-80H360v-80h140q33 0 56.5 23.5T580-600v80q0 33-23.5 56.5T500-440h-60v80h140v80H360Zm-240 0v-320H40v-80h160v400h-80Zm500 0 120-200-120-200h80l80 133 80-133h80L820-480l120 200h-80l-80-133-80 133h-80Z" />
  </svg>
)