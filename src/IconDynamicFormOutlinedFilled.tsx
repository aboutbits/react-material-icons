import React from 'react'
import { IconProps } from './types.js'

export const IconDynamicFormOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-520q-33 0-56.5-23.5T80-600v-120q0-33 23.5-56.5T160-800h360v280H160Zm0 360q-33 0-56.5-23.5T80-240v-120q0-33 23.5-56.5T160-440h440v280H160Zm520 0v-360h-80v-280h280l-80 200h80L680-160ZM190-270h60v-60h-60v60Zm0-360h60v-60h-60v60Z" />
  </svg>
)
