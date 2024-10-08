import React from 'react'
import { IconProps } from './types'

const IconDesktopLandscapeRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M280-320h280q17 0 28.5-11.5T600-360v-120q0-17-11.5-28.5T560-520H280q-17 0-28.5 11.5T240-480v120q0 17 11.5 28.5T280-320Zm80-290q0 13 8.5 21.5T390-580h250q8 0 14 6t6 14v90q0 13 8.5 21.5T690-440q13 0 21.5-8.5T720-470v-90q0-33-23.5-56.5T640-640H390q-13 0-21.5 8.5T360-610ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-80h640v-480H160v480Zm0 0v-480 480Z" />
  </svg>
)

export { IconDesktopLandscapeRounded as default }
