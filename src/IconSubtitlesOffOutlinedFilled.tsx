import React from 'react'
import { IconProps } from './types'

export const IconSubtitlesOffOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M720-560H514L274-800h526q33 0 56.5 23.5T880-720v476q0 11-2 21t-8 19L594-480h126v-80ZM822-26 686-160H160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800v112L26-822l56-56L878-82l-56 56ZM240-480h80v-48l-32-32h-48v80Zm206 80H240v80h286l-80-80Z" />
  </svg>
)
