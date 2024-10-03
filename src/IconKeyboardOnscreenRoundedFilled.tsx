import React from 'react'
import { IconProps } from './types.js'

export const IconKeyboardOnscreenRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M360-280h240q17 0 28.5-11.5T640-320q0-17-11.5-28.5T600-360H360q-17 0-28.5 11.5T320-320q0 17 11.5 28.5T360-280ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-440h640v-120H160v120Zm80 200q17 0 28.5-11.5T280-440q0-17-11.5-28.5T240-480q-17 0-28.5 11.5T200-440q0 17 11.5 28.5T240-400Zm120 0q17 0 28.5-11.5T400-440q0-17-11.5-28.5T360-480q-17 0-28.5 11.5T320-440q0 17 11.5 28.5T360-400Zm120 0q17 0 28.5-11.5T520-440q0-17-11.5-28.5T480-480q-17 0-28.5 11.5T440-440q0 17 11.5 28.5T480-400Zm120 0q17 0 28.5-11.5T640-440q0-17-11.5-28.5T600-480q-17 0-28.5 11.5T560-440q0 17 11.5 28.5T600-400Zm120 0q17 0 28.5-11.5T760-440q0-17-11.5-28.5T720-480q-17 0-28.5 11.5T680-440q0 17 11.5 28.5T720-400Z" />
  </svg>
)
