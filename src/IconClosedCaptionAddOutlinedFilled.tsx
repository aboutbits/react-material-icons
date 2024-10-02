import React from 'react'
import { IconProps } from './types'

export const IconClosedCaptionAddOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-160q-33 0-56.5-23.5T120-240v-480q0-33 23.5-56.5T200-800h560q33 0 56.5 23.5T840-720v324q-20-5-40-5t-40 5q-29 6-55 20.5T659-341q-20 20-34.5 46T604-240q-4 20-4 40t4 40H200Zm560 80v-80h-80v-80h80v-80h80v80h80v80h-80v80h-80ZM280-360h120q17 0 28.5-11.5T440-400v-40h-60v20h-80v-120h80v20h60v-40q0-17-11.5-28.5T400-600H280q-17 0-28.5 11.5T240-560v160q0 17 11.5 28.5T280-360Zm280 0h121q5-4 9.5-7t8.5-5q4-2 8-4.5t8-4.5q2-5 3.5-9.5t1.5-9.5v-40h-60v20h-80v-120h80v20h60v-40q0-17-11.5-28.5T680-600H560q-17 0-28.5 11.5T520-560v160q0 17 11.5 28.5T560-360Z" />
  </svg>
)
