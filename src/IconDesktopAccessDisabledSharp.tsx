import React from 'react'
import { IconProps } from './types'

const IconDesktopAccessDisabledSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-240v-593h47l73 73h-40v440h368L28-820l56-56L876-84l-56 56-212-212h-48v80h80v80H320v-80h80v-80H80Zm748-6-74-74h46v-440H314l-80-80h646v594h-52ZM308-540Zm226 0Z" />
  </svg>
)

export { IconDesktopAccessDisabledSharp as default }
