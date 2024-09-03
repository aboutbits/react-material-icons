import React from 'react'
import { IconProps } from './types'

const IconPhpOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-360v-240h140q24 0 42 18t18 42v40q0 24-18 42t-42 18h-80v80h-60Zm260 0v-240h60v80h80v-80h60v240h-60v-100h-80v100h-60Zm280 0v-240h140q24 0 42 18t18 42v40q0 24-18 42t-42 18h-80v80h-60ZM180-500h80v-40h-80v40Zm540 0h80v-40h-80v40Z" />
  </svg>
)

export { IconPhpOutlined as default }
