import React from 'react'
import { IconProps } from './types'

const IconEdgesensorHighOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M0-280v-280h80v280H0Zm120-120v-280h80v280h-80ZM320-80q-33 0-56.5-23.5T240-160v-640q0-33 23.5-56.5T320-880h320q33 0 56.5 23.5T720-800v640q0 33-23.5 56.5T640-80H320Zm440-200v-280h80v280h-80Zm120-120v-280h80v280h-80ZM320-280h320v-400H320v400Z" />
  </svg>
)

export { IconEdgesensorHighOutlinedFilled as default }
