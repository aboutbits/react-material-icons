import React from 'react'
import { IconProps } from './types'

const IconFileOpenRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M720-320h146q17 0 28.5 11.5T906-280q0 17-11.5 28.5T866-240h-50l90 90q11 11 11 27.5T906-94q-12 12-28.5 12T849-94l-89-89v49q0 17-11.5 28.5T720-94q-17 0-28.5-11.5T680-134v-146q0-17 11.5-28.5T720-320ZM520-800v160q0 17 11.5 28.5T560-600h160L520-800Zm-280-80h287q16 0 30.5 6t25.5 17l194 194q11 11 17 25.5t6 30.5v167q0 17-11.5 28.5T760-400H640q-17 0-28.5 11.5T600-360v240q0 17-11.5 28.5T560-80H240q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880Z" />
  </svg>
)

export { IconFileOpenRoundedFilled as default }
