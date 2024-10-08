import React from 'react'
import { IconProps } from './types'

const IconBrowseSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-120v-240h320v240H120Zm400 0v-400h320v400H520ZM360-280Zm240-160Zm-480 0v-400h320v400H120Zm240-80Zm160-80v-240h320v240H520Zm80-80ZM200-200h160v-80H200v80Zm400 0h160v-240H600v240ZM200-520h160v-240H200v240Zm400-160h160v-80H600v80Z" />
  </svg>
)

export { IconBrowseSharp as default }
