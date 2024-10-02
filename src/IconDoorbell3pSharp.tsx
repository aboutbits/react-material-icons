import React from 'react'
import { IconProps } from './types'

export const IconDoorbell3pSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-80v-800h560v800H200Zm80-80h400v-640H280v640Zm200-40q33 0 56.5-23.5T560-280q0-33-23.5-56.5T480-360q-33 0-56.5 23.5T400-280q0 33 23.5 56.5T480-200Zm0-40q-17 0-28.5-11.5T440-280q0-17 11.5-28.5T480-320q17 0 28.5 11.5T520-280q0 17-11.5 28.5T480-240Zm0-180q18 0 29-11t11-29h-80q0 18 11 29t29 11Zm-160-60h320v-40h-40v-92q0-45-23-80.5T512-740v-44h-64v44q-42 15-65 49t-23 79v92h-40v40Zm-40 320v-640 640Z" />
  </svg>
)
