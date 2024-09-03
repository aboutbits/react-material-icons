import React from 'react'
import { IconProps } from './types'

const IconFilterAltOffSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M592-481 273-800h569L592-481ZM791-56 560-287v127H400v-287L56-791l56-57 736 736-57 56Z" />
  </svg>
)

export { IconFilterAltOffSharpFilled as default }
