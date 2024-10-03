import React from 'react'
import { IconProps } from './types.js'

export const IconFlashlightOffOutlined: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M792-56 640-208v128H320v-448L56-792l56-56 736 736-56 56ZM400-160h160v-128L400-448v288Zm240-274-80-80v-30l80-120v-16H394l-80-80h326v-40H274l-34-34v-46h480v240l-80 120v86Zm-160 66Zm17-209Z" />
  </svg>
)
