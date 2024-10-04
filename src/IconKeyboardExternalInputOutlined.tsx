import React from 'react'
import { IconProps } from './types.js'

export const IconKeyboardExternalInputOutlined: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-280v-400 400Zm0 80q-33 0-56.5-23.5T80-280v-400q0-33 23.5-56.5T160-760h640q33 0 56.5 23.5T880-680v261q-17-16-37-27.5T800-466v-214H160v400h324q-2 10-2.5 19.5T481-240q0 11 .5 20.5T484-200H160Zm160-200v80h174q8-23 20-43t28-37H320ZM200-520v80h80v-80h-80Zm120 0v80h80v-80h-80Zm120 0v80h80v-80h-80Zm120 0v80h28q12-8 25-14.5t27-11.5v-54h-80Zm120 0v44q10-2 19.5-3t20.5-1q11 0 20.5 1t19.5 3v-44h-80ZM200-640v80h80v-80h-80Zm120 0v80h80v-80h-80Zm120 0v80h80v-80h-80Zm120 0v80h80v-80h-80Zm120 0v80h80v-80h-80Zm40 560-56-56 63-64H560v-80h167l-63-64 56-56 160 160L720-80Z" />
  </svg>
)
