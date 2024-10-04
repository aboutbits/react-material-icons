import React from 'react'
import { IconProps } from './types'

const IconKeyboardCapslockRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M280-240q-17 0-28.5-11.5T240-280q0-17 11.5-28.5T280-320h400q17 0 28.5 11.5T720-280q0 17-11.5 28.5T680-240H280Zm200-384L324-468q-11 11-28 11t-28-11q-11-11-11-28t11-28l184-184q12-12 28-12t28 12l184 184q11 11 11 28t-11 28q-11 11-28 11t-28-11L480-624Z" />
  </svg>
)

export { IconKeyboardCapslockRounded as default }
