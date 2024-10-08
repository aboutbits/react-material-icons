import React from 'react'
import { IconProps } from './types'

const IconKeyboardReturnOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M360-240 120-480l240-240 56 56-144 144h488v-160h80v240H272l144 144-56 56Z" />
  </svg>
)

export { IconKeyboardReturnOutlined as default }
