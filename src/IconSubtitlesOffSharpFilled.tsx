import React from 'react'
import { IconProps } from './types'

export const IconSubtitlesOffSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M720-560H514L274-800h606v606L594-480h126v-80ZM822-26 686-160H80v-640h80v112L26-822l56-56L878-82l-56 56ZM240-480h80v-48l-32-32h-48v80Zm206 80H240v80h286l-80-80Z" />
  </svg>
)
