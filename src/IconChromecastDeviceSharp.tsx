import React from 'react'
import { IconProps } from './types'

export const IconChromecastDeviceSharp: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M800-380v-200h120v200H800Zm-40 60H440q-16 0-32.5 4.5T366-300q-39 17-67 23.5t-59 6.5q-78 0-139-46T40-420v-120q0-59 61-104.5T240-690q31 0 59 6.5t67 23.5q25 11 41.5 15.5T440-640h320v320Zm-520-30q22 0 43-5t51-18q35-15 59-21t47-6h240v-160H440q-23 0-47-6t-59-21q-30-13-51-18t-43-5q-47 0-83.5 21.5T120-540v40h20q8 0 14 6t6 14q0 8-6 14t-14 6h-20v40q0 27 36.5 48.5T240-350ZM120-480Z" />
  </svg>
)
