import React from 'react'
import { IconProps } from './types'

const IconKeyboardOptionKeyRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M637-200q-22 0-40-10.5T568-240L314-680H160q-17 0-28.5-11.5T120-720q0-17 11.5-28.5T160-760h154q22 0 40 10.5t29 29.5l254 440h163q17 0 28.5 11.5T840-240q0 17-11.5 28.5T800-200H637Zm3-480q-17 0-28.5-11.5T600-720q0-17 11.5-28.5T640-760h160q17 0 28.5 11.5T840-720q0 17-11.5 28.5T800-680H640Z" />
  </svg>
)

export { IconKeyboardOptionKeyRounded as default }
